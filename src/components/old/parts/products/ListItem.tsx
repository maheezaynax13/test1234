import { ItemPrice } from '@components/old/UI';
import Icon, { deleteBin } from '@libs/icons';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { propsType } from './GridItem';
import ImageWithSkeleton from './ImageWithSkeleton';

const ListItem = (props: IPropsType): JSX.Element => {
	if (props && Object.keys(props).length > 0) {
		const {
			id,
			name,
			imageUrl,
			price: { regular, sale, discountPercentage },
			isDelete,
			deleteHandler,
		} = props;

		return (
			<Block className="d-md-flex">
				<ImageWrapper>
					<ImageWithSkeleton imageUrl={imageUrl} altText={name} />
				</ImageWrapper>
				<ContentWrapper>
					<Title>{name}</Title>
					<ItemPrice size="md" current={sale} old={regular} discount={discountPercentage} />
					<Row className="align-items-center">
						<Col md={6}>
							<Link href={`/product/${id}`}>
								<a className="btn btn-primary font-weight-semibold text-uppercase rounded-pill">
									View Product
								</a>
							</Link>
						</Col>
						<Col md={6} className="text-right">
							{isDelete && (
								<Button variant="link" onClick={() => deleteHandler(id)}>
									<Icon path={deleteBin} width={20} height={20} fill="#F20045" />
								</Button>
							)}
						</Col>
					</Row>
				</ContentWrapper>
			</Block>
		);
	}

	return null;
};

export default ListItem;

interface IPropsType extends propsType {
	isDelete?: boolean;
	deleteHandler?: (id: number) => void;
}

const Block = styled.div`
	padding: 10px;
	border-radius: 10px;
	border: 1px solid #ececec;
	background-color: var(--white);

	& + & {
		margin-bottom: 10px;
	}
`;

const ImageWrapper = styled.div`
	width: 130px;
	min-width: 130px;
	height: 130px;
	padding: 3px;
	text-align: center;
	overflow: hidden;
	border: 1px solid #ececec;
	border-radius: 3px;
`;

const ContentWrapper = styled.div`
	width: calc(100% - 150px);
	margin-left: 20px;
`;

const Title = styled.p`
	max-width: 528px;
	min-height: 38px;
	margin-bottom: 8px;
`;
