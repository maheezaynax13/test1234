import { Button, ButtonProps, Card, CardBody, CardHeader, FormCheck, Image } from '@components/atoms';
import { GatewaysType, IGatewayData } from '@libs/api/interfaces';
import { ChangeEvent, FC, MouseEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Gateway: FC<GatwayProps> = (props) => {
	const {
		isActive,
		onChange,
		imageURL,
		name,
		id,
		description: { title, items },
		...rest
	} = props;
	const checkProps = {
		checked: id === isActive,
		onChange,
	};

	return (
		<Wrapper onClick={onChange}>
			<CardHeader className="border-bottom-0">
				<Row className="align-items-center" style={{ minHeight: '2.313rem' }}>
					<Col xs={7}>
						<FormCheck
							type="radio"
							label={<span className="text-dark font-weight-semibold ml-2">{name}</span>}
							name="gateway"
							className="mb-0"
							{...checkProps}
						/>
					</Col>
					<Col xs={5} className="text-right overflow-hidden">
						<Image fluid src={imageURL} alt={name} />
					</Col>
				</Row>
			</CardHeader>
			{id === isActive && (
				<CardBody>
					<p className="mb-1 text-secondary">{title}:</p>
					<ol className="pl-3 text-secondary">
						{items.map((e, i) => (
							<li key={i} className="mb-1">
								{e}
							</li>
						))}
					</ol>
					<PayButton
						pill
						className={id === 'NAGAD' ? 'btn-nagad' : id === 'BKASH' ? 'btn-bkash' : ''}
						{...rest}
					>
						{id === 'NAGAD'
							? 'Pay with Nagad'
							: id === 'BKASH'
							? 'Pay with bKash'
							: id === 'COD'
							? 'Place Order'
							: 'Pay with Card'}
					</PayButton>
				</CardBody>
			)}
		</Wrapper>
	);
};

export interface GatwayProps extends IGatewayData, Pick<ButtonProps, 'onClick'> {
	isActive: GatewaysType;
	onChange: (e: ChangeEvent | MouseEvent) => void;
}

const PayButton = styled(Button)`
	min-width: 11.25rem;
	text-transform: uppercase;

	@media (max-width: 767.98px) {
		display: block;
		margin: 0 auto;
	}
`;

const Wrapper = styled(Card)`
	margin-top: 1rem;

	&:hover {
		cursor: pointer;
	}
`;
