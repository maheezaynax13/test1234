import { Image } from '@components/atoms';
import { IParentCats } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

export const ParentCategories: FC<PropsType> = ({ data, activeID, clickHandler }) => {
	return (
		<Wrapper>
			{data?.map(({ categoryID, categoryName, imageURL }, i) => (
				<button
					key={i}
					className={categoryID === activeID ? 'active' : ''}
					onClick={() => clickHandler(categoryID)}
				>
					<Image fluid src={imageURL ? imageURL : '/images/avatar-shop.png'} alt={categoryName} />
					<span>{categoryName}</span>
				</button>
			))}
		</Wrapper>
	);
};

type PropsType = {
	data: IParentCats[];
	activeID: string;
	clickHandler: (id: string) => void;
};

const Wrapper = styled.div`
	width: 6rem;
	height: calc(100vh - 3.5rem);
	padding: 0.5rem;
	overflow: hidden;
	overflow-y: auto;
	background-color: var(--white);
	box-shadow: 0 3px 6px rgba(138, 138, 138, 0.1);

	button {
		width: 100%;
		padding: 0.5rem 0;
		text-align: center;
		border: none;
		box-shadow: none;
		background-color: transparent;
		line-height: 1rem;

		span {
			font-size: 0.75rem;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.active {
			position: relative;

			&:before {
				content: '';
				width: 0.375rem;
				height: 100%;
				position: absolute;
				left: -0.5rem;
				top: 0;
				background-color: var(--primary);
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
			}
		}
	}
`;
