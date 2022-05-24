/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { Button, Dropdown, FormInput } from '@components/atoms';
import { cartAPI, productAPI } from '@libs/api';
import { ICoupon } from '@libs/api/interfaces/product/coupons';
import Icon, { arrowDown } from '@libs/icons';
import { getCartState, updateCart } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import { FC, Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CouponsCardContainer } from './CouponsCardContainer';

export const ApplyCoupon: FC = () => {
	const [coupons, setCoupons] = useState<ICoupon[]>(null);
	const [promoCode, setPromoCode] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>(null);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const { discount, couponOrVoucherCode } = useSelector(getCartState);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const { success, data } = await productAPI.getCoupons();
				if (success) setCoupons(data);
			} catch (error) {}
		})();
	}, []);

	const handleRemoveCoupon = async () => {
		if (couponOrVoucherCode) {
			try {
				const {
					success,
					data: { packages, ...rest },
				} = await cartAPI.removeCoupon(couponOrVoucherCode);
				if (success) {
					setPromoCode('');
					setErrorMessage(null);
					dispatch(updateCart(rest));
				}
			} catch (error) {}
		}
	};

	const handleApplyCoupon = async (code: string) => {
		if (code) {
			try {
				const { success, data, message } = await cartAPI.applyCoupon(code);
				if (success && data) {
					const { packages, ...rest } = data;
					dispatch(updateCart(rest));
				}
				throw new Error(String(message));
			} catch (error) {
				setErrorMessage(error.message);
			}
		}
	};

	if (couponOrVoucherCode) {
		return (
			<Row>
				<Col md={6}>
					<p className="mb-0">
						Coupon applied, <br />
						You saved {formatPrice(discount)}
					</p>
				</Col>
				<Col md={6}>
					<Button variant="link" className="d-block text-danger ml-auto px-0" onClick={handleRemoveCoupon}>
						Remove
					</Button>
				</Col>
			</Row>
		);
	}

	return (
		<Fragment>
			<DropdownWrapper
				size="xl"
				variant="light"
				isOpen={openDropdown}
				className="bg-transparent border-0 w-100 px-0"
				buttonLabel={
					<div
						className="d-flex"
						onClick={() => {
							setOpenDropdown(true);
							setErrorMessage(null);
						}}
					>
						<span className="mr-auto w-75 text-left font-weight-semibold">
							Gift Cards, Coupons &amp; Promotional Codes
						</span>
						<Icon path={arrowDown} className="ml-auto" />
					</div>
				}
			>
				<p className="mb-1">Apply any of the following vouchers to avail more discount on your purchase.</p>

				<CouponsCardContainer
					couponData={coupons}
					promoCode={promoCode}
					clickHandler={(code, isOpen) => {
						setPromoCode(code);
						handleApplyCoupon(code);
						setOpenDropdown(isOpen);
					}}
				/>
			</DropdownWrapper>
			<InputWrapper>
				<FormInput
					srOnly
					placeholder="Voucher Code"
					value={promoCode}
					onChange={({ target: { value } }) => {
						setPromoCode(value);
						setErrorMessage(null);
					}}
					message={errorMessage}
					required
				/>
				<Button variant="light" onClick={() => handleApplyCoupon(promoCode)}>
					Apply
				</Button>
			</InputWrapper>
		</Fragment>
	);
};

const InputWrapper = styled.div`
	position: relative;

	& > div {
		width: 100%;
		margin-bottom: 0.5rem;
	}
	input {
		padding-right: 4rem;
	}
	button {
		position: absolute;
		top: 1px;
		right: 1px;
		padding: 0.47rem 0.75rem;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

const DropdownWrapper = styled(Dropdown)`
	& ~ .DropdownList {
		width: 100%;
		padding: 0.5rem;
		top: 91%;
	}
`;
