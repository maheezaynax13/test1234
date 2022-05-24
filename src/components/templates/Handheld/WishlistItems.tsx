/* eslint-disable react/no-unescaped-entities */
import { ContentCard, WishlistItem } from '@components/organisms';
import { IWishlistItem } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';
import { NotFound } from '../Member/NotFound';

export const WishlistItems: FC<PropsType> = ({ data }) => {
	return (
		<ContentCard title="Wishlist">
			<Wrapper>
				{data?.length > 0 ? (
					data.map((e, i) => <WishlistItem key={i} {...e} />)
				) : (
					<NotFound>There is nothing in your wishlist. Let's add some items.</NotFound>
				)}
			</Wrapper>
		</ContentCard>
	);
};

interface PropsType {
	data: IWishlistItem[];
}

const Wrapper = styled.div`
	@media (max-width: 767.99px) {
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: start;
		flex-wrap: wrap;
		margin-left: -0.35rem;
		margin-right: -0.35rem;
	}
`;
