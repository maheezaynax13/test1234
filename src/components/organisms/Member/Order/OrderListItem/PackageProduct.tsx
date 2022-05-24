import { Button, CardBody, Image } from '@components/atoms';
import { BadgeByStatus } from '@components/molecules';
import { IAllOrders } from '@libs/api/interfaces';
import { formatPrice, formatStatus } from '@utils/helpers';
import { FC, Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ProductReturnProcess from './Modal/ReturnRefund/ProductReturnProcess';

export const PackageProduct: FC<PackageProductProps> = (props) => {
	const [isModal, setModal] = useState<'RETURN' | 'WRITE_REVIEW'>(null);

	if (props?.productID) {
		const {
			productInfo: { imageURL, productName, chosenVariant },
			quantity,
			price,
			history,
			isSidebar,
			clickHandler,
			hideViewDetail,
		} = props;
		const status = history[history.length - 1].status;

		return (
			<Wrapper>
				<Row>
					<Col md="auto">
						<ProductImage thumbnail src={imageURL} alt={productName} />
					</Col>
					<Col>
						<Row>
							<Col>
								<Title>{productName}</Title>
								<span>Quantity: {quantity}</span>
								{chosenVariant && Object.keys(chosenVariant).length > 0 && (
									<Attributes>
										{Object.entries(chosenVariant).map(([key, value], i) => (
											<span key={i}>
												{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
											</span>
										))}
									</Attributes>
								)}
								<div className="d-flex align-items-center mb-2">
									<p className="mb-0">Price: {formatPrice(price)}</p>
									{status === 'DELIVERED' && (
										<Fragment>
											<Button
												pill
												size="sm"
												variant="dark"
												className="ml-2"
												onClick={() => setModal('RETURN')}
											>
												Return
											</Button>
											<Button
												pill
												size="sm"
												className="ml-2"
												onClick={() => setModal('WRITE_REVIEW')}
											>
												Write Review
											</Button>
										</Fragment>
									)}
								</div>
							</Col>
							{!isSidebar && (
								<Col md={4} className="Action">
									<div className="w-100 text-right">
										<BadgeByStatus pill variant={status}>
											{formatStatus(status)}
										</BadgeByStatus>
										{!hideViewDetail && (
											<div className="w-100 d-block">
												<Button
													variant="link"
													className="text-dark font-weight-semibold px-0"
													onClick={clickHandler}
												>
													View Details
												</Button>
											</div>
										)}
									</div>
								</Col>
							)}
						</Row>
					</Col>
				</Row>
				<ProductReturnProcess
					productInfo={props}
					isActive={isModal === 'RETURN'}
					onHide={() => setModal(null)}
				/>
			</Wrapper>
		);
	}

	return null;
};

type Product = IAllOrders['items'][0]['packages'][0]['items'][0];
export interface PackageProductProps extends Product {
	isSidebar?: boolean;
	hideViewDetail?: boolean;
	clickHandler?: () => void;
}

const ProductImage = styled(Image)`
	width: 5.625rem;
	height: 5.625rem;
	display: block;
	object-fit: cover;
`;

const Title = styled.p`
	min-height: 2.625rem;
	margin-bottom: 0.5rem;
`;

const Attributes = styled.div`
	width: auto;
	display: inline-block;
	margin-bottom: 0.5rem;

	span {
		color: var(--light-gray);
		margin-left: 2rem;
	}
`;

const Wrapper = styled(CardBody)`
	@media (max-width: 767.99px) {
		.Action {
			position: absolute;
			top: -80px;
		}
	}
`;
