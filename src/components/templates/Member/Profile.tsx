/* eslint-disable no-empty */
import { Avatar, Button, Card, CardBody, CardHeader, FormInput, Modal, SelectPicker } from '@components/atoms';
import { LoaderButton } from '@components/molecules';
import { customerAPI } from '@libs/api';
import { IProfile } from '@libs/api/interfaces';
import { useForm } from '@libs/hooks';
import Icon, { checkboxCircle } from '@libs/icons';
import { profileValidations } from '@libs/validations';
import { authUpdateAvatar, authUpdateProfile, getUserState } from '@store/actions';
import { genderOptions } from '@utils/constants';
import { getConvertedDate, handleNumberOnly, isEmailAddress, isPhoneNumber } from '@utils/helpers';
import dateFormat from 'dateformat';
import Router from 'next/router';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const Profile: FC<IProfile> = (props) => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [validation, setValidation] = useState<boolean>(false);
	const [showModal, setModal] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>();
	const dispatch = useDispatch();
	const {
		profile: { avatarURL, mobileNumber },
	} = useSelector(getUserState);

	useEffect(() => {
		for (const [key, value] of Object.entries(props)) {
			if (key in initialValues) setValues((prevState) => ({ ...prevState, [key]: value }));
		}
	}, [props]);

	const handleUpdate = async () => {
		const isValidEmail = values.email.length > 0 ? isEmailAddress(values.email) : true;
		const isValidNumber = values.mobileNumberAlt.length > 0 ? isPhoneNumber(values.mobileNumberAlt) : true;
		if (isValidEmail && isValidNumber) {
			try {
				const {
					success,
					data: { firstName, lastName },
				} = await customerAPI.updateProfile(values);
				if (success) {
					dispatch(authUpdateProfile({ firstName, lastName }));
					Router.push('/member/my-profile');
					setModal(true);
				}
			} catch (error) {}
		} else {
			setValidation(true);
		}
	};

	const { values, errors, setValues, handleSubmit, handleChange, handleSelectChange } = useForm({
		initialValues,
		initialErrors,
		validate: profileValidations,
		onCallback: handleUpdate,
	});

	const handleAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files?.length > 0) {
			setLoading(true);
			try {
				const { success, data } = await customerAPI.updateProfilePhoto(files[0]);
				if (success) {
					dispatch(authUpdateAvatar(data.avatarURL));
					setModal(true);
				}
			} catch (error) {
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<Card>
			<CardHeader className="bg-light">
				<div className="d-flex align-items-center">
					<Avatar src={avatarURL} />
					<input ref={inputRef} type="file" accept="image/*" className="d-none" onChange={handleAvatar} />
					<LoaderButton
						pill
						outline
						variant="dark"
						isActive={isLoading}
						className="ml-3"
						onClick={() => inputRef.current.click()}
					>
						Upload Profile Picture
					</LoaderButton>
				</div>
			</CardHeader>

			<CardBody>
				<form onSubmit={handleSubmit} noValidate>
					<Row>
						<Col md={6}>
							<Row>
								<Col md={6}>
									<FormInput
										label="First Name"
										name="firstName"
										value={values.firstName}
										onChange={handleChange}
										message={errors.firstName}
										required
									/>
								</Col>
								<Col md={6}>
									<FormInput
										label="Last Name"
										name="lastName"
										value={values.lastName}
										onChange={handleChange}
										message={errors.lastName}
										required
									/>
								</Col>
							</Row>
							<FormInput label="Phone Number" name="phoneName" defaultValue={mobileNumber} disabled />
							<FormInput
								label="Phone Number (optional)"
								name="mobileNumberAlt"
								maxLength={11}
								value={values.mobileNumberAlt}
								message="Phone Number is invalid"
								onChange={handleChange}
								onKeyDown={handleNumberOnly}
								required={values.mobileNumberAlt.length > 0 && !isPhoneNumber(values.mobileNumberAlt)}
							/>
						</Col>
						<Col md={6}>
							<div className="w-100 d-block pl-md-4">
								<FormInput
									type="email"
									label="Email Address"
									name="email"
									value={values.email}
									message="Email is invalid"
									onChange={handleChange}
									required={values.email.length > 0 && !isEmailAddress(values.email)}
								/>
								<Row>
									<ColWrap md={6}>
										<FormInput
											type="date"
											label="Date of Birth"
											name="dateOfBirth"
											max={dateFormat(getConvertedDate(new Date(), { year: 8 }), 'yyyy-mm-dd')}
											value={dateFormat(values.dateOfBirth, 'yyyy-mm-dd')}
											data-date-inline-picker="true"
											onChange={handleChange}
											onKeyDown={(e) => e.preventDefault()}
										/>
									</ColWrap>
									<Col md={6}>
										<SelectPicker
											label="Gender"
											placeholder="Choose a option"
											name="gender"
											items={genderOptions}
											value={values.gender}
											clickHandler={handleSelectChange}
											message={errors.gender}
											required
										/>
									</Col>
								</Row>
								<Button pill type="submit" className="d-block ml-auto">
									Update
								</Button>
							</div>
						</Col>
					</Row>
				</form>
				<Modal size="sm" isActive={showModal} onHide={() => setModal(false)} closeButton>
					<div className="text-center p-3">
						<Icon path={checkboxCircle} fill="var(--primary)" />
						<p>Your profile has been updated</p>
					</div>
				</Modal>
			</CardBody>

			<CardBody>
				<Button pill outline variant="dark" onClick={() => Router.push('/member/change-password')}>
					Change Password
				</Button>
			</CardBody>
		</Card>
	);
};

export const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	mobileNumberAlt: '',
	dateOfBirth: '',
	gender: '',
};
export const initialErrors = { firstName: null, lastName: null, gender: null };

const ColWrap = styled(Col)`
	input[type='date']::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
`;
