import { Avatar, Image, Link } from '@components/atoms';
import { FC } from 'react';
import styled from 'styled-components';

export const GridStore: FC<GridStoreProps> = (props) => {
	const {
		seller: { iconURL, sellerName, sellerID },
		products,
	} = props;

	return (
		<Link href={`/shop/${sellerID}`} className="d-block text-decoration-none mb-2">
			<Wrapper>
				<div className="StoreInfo">
					<Avatar size="xs" src={iconURL} alt={sellerName} />
					<span>{sellerName}</span>
				</div>
				<ul className="StoreProducts">
					{products?.map(({ slug, imageURL }, i) => (
						<li key={i}>
							<Link href={`/product/${slug}`}>
								<Image fluid src={imageURL} alt="" />
							</Link>
						</li>
					))}
				</ul>
			</Wrapper>
		</Link>
	);
};

type ISeller = {
	sellerID: string;
	sellerName: string;
	iconURL: string;
};
type IProduct = {
	slug: string;
	imageURL: string;
};
export interface GridStoreProps {
	seller: ISeller;
	products: IProduct[];
}

const Wrapper = styled.div`
	padding: 0.625rem;
	display: inline-block;
	border-radius: 0.625rem;
	background-color: var(--white);

	.StoreInfo {
		width: 100%;
		display: flex;
		align-items: center;

		span {
			color: var(--dark);
			font-weight: 500;
			margin-left: 0.5rem;
		}
	}

	.StoreProducts {
		width: 100%;
		margin: 0.5rem 0 0 0;
		padding: 0;

		li {
			width: calc(33% - 5px);
			list-style: none;
			float: right;
			overflow: hidden;
			border-radius: 0.375rem;
			background-color: var(--white);

			&:first-child {
				width: calc(67% - 4px);
				margin-right: 9px;
				float: left;
			}

			&:nth-child(2) {
				margin-bottom: 0.625rem;
			}
		}
	}
`;
