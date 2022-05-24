import { CardWithBorder } from '@components/old/UI';
import { Stores } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const GridItem = (props: propsType): JSX.Element => {
	const {
		store: {
			products,
			seller: { iconURL, sellerID, sellerName },
		},
		classes,
	} = props;

	if (products && products.length > 0) {
		return (
			<CardWithBorder className={`border-0 d-inline-block mt-2 mb-2 ${classes ?? ''}`}>
				<Link href={`/shop/${sellerID}`}>
					<a className="text-decoration-none">
						<StoreWrap>
							<Image fluid src={iconURL || ''} alt={''} />
							<StoreName>{sellerName}</StoreName>
						</StoreWrap>
					</a>
				</Link>
				<ImageList>
					{products.map(({ imageURL, slug }, i) => (
						<li key={i}>
							<Link href={`/product/${slug}`}>
								<a>
									<Image fluid src={imageURL} alt={''} />
								</a>
							</Link>
						</li>
					))}
				</ImageList>
			</CardWithBorder>
		);
	}

	return null;
};

export default GridItem;

interface propsType {
	store: Stores;
	classes?: string;
}

const StoreWrap = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	img {
		width: 32px;
		height: 32px;
		border-radius: 100%;
		display: inline-block;
	}
`;

const StoreName = styled.p`
	height: 21px;
	color: var(--dark);
	font-weight: 600;
	margin: 0 0 0 10px;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const ImageList = styled.ul`
	margin: 0;
	padding: 0;

	li {
		width: calc(33% - 5px);
		list-style: none;
		float: right;
		overflow: hidden;
		border-radius: 6px;
		background-color: var(--white);

		&:first-child {
			width: calc(67% - 4px);
			margin-right: 9px;
			float: left;
		}

		&:nth-child(2) {
			margin-bottom: 10px;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;
