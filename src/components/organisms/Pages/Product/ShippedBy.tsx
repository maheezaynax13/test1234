import { Image } from '@components/atoms';
import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
export const ShippedBy: FC<ShippedByProps> = ({ fulfilledBy }) => {
	return (
		<Wrap>
			<Image src="/images/box.svg" height={30} style={{ marginTop: '-4px' }} alt="shipped by" />

			<Col>
				<p>
					<Title>Shipped by</Title> <span className="ml-2">{fulfilledBy}</span>
					{/* <span className="ml-2">(Cash on delivery not available)</span> */}
				</p>
			</Col>
		</Wrap>
	);
};

type ShippedByProps = ISingleProduct['shippingInfo'];

const Wrap = styled(Row)`
	margin-bottom: 15px;
`;

const Title = styled.span`
	font-weight: 600;
	margin-bottom: 3px;
`;
