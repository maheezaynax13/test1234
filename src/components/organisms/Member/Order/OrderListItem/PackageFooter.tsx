import { CardBody } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const PackageFooter: FC<PackageFooterProps> = ({ estimatedDeliveryDays, subTotal }) => (
	<Wrapper>
		<Row>
			<Col md={6}>
				<p className="text-light-gray mb-0">
					Estimate delivery within {estimatedDeliveryDays} days from order date
				</p>
			</Col>
			<Col md={6} className="text-right">
				<p className="text-light-gray mb-0">
					<span className="font-weight-semibold">Subtotal:</span> {formatPrice(subTotal)}
				</p>
			</Col>
		</Row>
	</Wrapper>
);

export type PackageFooterProps = Pick<IAllOrders['items'][0]['packages'][0], 'estimatedDeliveryDays' | 'subTotal'>;

const Wrapper = styled(CardBody)`
	@media (max-width: 767.99px) {
		.row {
			flex-wrap: nowrap;
			align-items: center;

			& > :nth-child(2) {
				max-width: 8.5rem;
			}
		}
	}
`;
