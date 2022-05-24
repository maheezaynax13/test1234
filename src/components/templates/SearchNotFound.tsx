/* eslint-disable react/no-unescaped-entities */
import { Button, Card, CardBody, Image } from '@components/atoms';
import { customerAPI } from '@libs/api';
import { authPopup, getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const SearchNotFound: FC = () => {
	const [value, setValue] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const dispatch = useDispatch();
	const { isAuthenticate } = useSelector(getUserState);
	const router = useRouter();

	const handleSubmit = async () => {
		if (value.length > 0) {
			if (isAuthenticate) {
				const payload = { suggestProduct: value, status: 'PENDING' };
				const { success, data } = await customerAPI.customerSuggestProduct(payload);
				if (success) {
					setValue('');
					setMessage(data);
					setTimeout(() => setMessage(''), 5000);
				}
			} else {
				dispatch(authPopup({ isActive: true, type: 'signin' }));
			}
		} else {
			setMessage("Product suggestion can't be empty!");
			setTimeout(() => setMessage(''), 5000);
		}
	};
	return (
		<div className="w-100 pt-5 pb-5 mt-5 mb-5">
			<Row className="align-items-center">
				<Col xs={12} md={6} className="text-md-right">
					<Image src="/images/product-not-found.png" alt="Product Not Found" />
				</Col>
				<Col xs={12} md={6}>
					<p className="font-weight-semibold mt-3 mt-md-0 mb-2">
						Sorry! We couldn't find what you were looking for.
					</p>
					<small>Try something like:</small>
					<small className="text-secondary d-block">Using more general terms</small>
					<small className="text-secondary d-block">Checking your spelling</small>
				</Col>
			</Row>
			<CardWrapper>
				<CardBody>
					<b className=" d-block mb-1">Can't find what you're looking for?</b>
					<small className="text-secondary d-block">
						We're always looking to expand our range and make sure our customers can get everything they
						need in their zDrop shop. If there's something you think we should stock, we'd love to hear it
						from you!
					</small>
					<b className=" d-block my-2">Product suggestion</b>
					<TextArea
						name="productSuggestion"
						placeholder="Suggest a product"
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							setMessage('');
						}}
						// onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
					/>
					<div className="d-flex my-3">
						<span
							className={` ml-auto align-self-center px-3 ${
								message?.includes('Thanks') ? 'text-primary' : 'text-danger'
							} `}
						>
							{message}
						</span>
						<Button type="submit" onClick={handleSubmit} className="px-5">
							Submit
						</Button>
					</div>
				</CardBody>
			</CardWrapper>
		</div>
	);
};

const TextArea = styled.textarea`
	min-height: 5rem;
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ececec;
	background-color: #fafafa;
`;

const CardWrapper = styled(Card)`
	margin: 1rem auto;
	padding: 0.5rem;
	max-width: 600px;
`;
