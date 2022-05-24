import { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Button, ButtonProps, FormCheck } from '@components/atoms';
import { OrderPlaceBtn, OrderPlaceBtnProps } from './OrderPlaceBtn';

export const BillingAddress: FC<BillingAddressProps> = ({ clickHandler, updateHandler, ...rest }) => (
	<Row>
		<Col md={9}>
			<Wrapper>
				<h6 className="font-weight-semibold mb-0">Billing Address</h6>
				<FormCheck
					type="radio"
					label={<span className="text-secondary">Same as Shipping Address</span>}
					defaultChecked
				/>
				<div className="d-inline-block">
					<Button variant="link" className="px-0 mr-2" onClick={updateHandler}>
						Change Address
					</Button>
					<Button {...rest} className="font-weight-semibold">
						Add Billing Address
					</Button>
				</div>
			</Wrapper>
		</Col>
		<Col md={3}>
			<OrderPlaceBtn clickHandler={clickHandler} />
		</Col>
	</Row>
);

export interface BillingAddressProps extends ButtonProps, Pick<OrderPlaceBtnProps, 'clickHandler'> {
	updateHandler?: MouseEventHandler<HTMLButtonElement>;
}

BillingAddress.defaultProps = {
	variant: 'link',
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	& > * {
		margin-bottom: 0;
		margin-left: 1.5rem;

		&:first-child {
			margin-left: 0;
		}
	}

	@media (max-width: 767.99px) {
		flex-wrap: wrap;

		& > :nth-child(3) {
			margin-left: 0;
		}
	}
`;
