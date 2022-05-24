import { Link } from '@components/atoms';
import { sortOptions } from '@utils/constants';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

export const ShopTabs: FC = () => {
	const {
		asPath,
		query: { sellerID, tab = 'homepage', sort },
	} = useRouter();

	return (
		<Wrapper>
			<Link className={asPath === `/shop/${sellerID}` ? 'active' : ''} href={`/shop/${sellerID}`}>
				Homepage
			</Link>
			<Link
				className={
					sort !== 'NEW_ARRIVAL' && (tab === 'all_products' || sortOptions.find((e) => e.value === sort))
						? 'active'
						: ''
				}
				href={`/shop/${sellerID}?tab=all_products`}
			>
				All Products
			</Link>
			<Link className={sort === 'NEW_ARRIVAL' ? 'active' : ''} href={`/shop/${sellerID}?sort=NEW_ARRIVAL`}>
				New Arrivals
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border-bottom: 1px solid var(--border);

	a {
		color: var(--light-gray);
		font-weight: 500;
		display: inline-block;
		padding: 1rem;
		transition: color 0.2s ease-in-out;

		&.active {
			color: var(--dark);
			position: relative;

			&:after {
				position: absolute;
				left: 0.625rem;
				bottom: -1px;
				content: '';
				width: calc(100% - 1.25rem);
				height: 4px;
				background-color: var(--primary);
				border-top-left-radius: 3px;
				border-top-right-radius: 3px;
			}
		}

		&:hover {
			color: var(--dark);
			text-decoration: none;
		}

		&:first-child {
			padding-left: 0;

			&:after {
				left: 0;
				width: calc(100% - 0.625rem);
			}
		}
	}
`;
