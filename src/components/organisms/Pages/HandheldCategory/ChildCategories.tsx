import { Image } from '@components/atoms';
import { IParentCats } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ChildCategories: FC<PropsType> = ({ data }) => {
	const router = useRouter();

	return (
		<Wrapper>
			<Row>
				{data?.length > 0 ? (
					data.map(({ categoryName, imageURL, slug }, i) => (
						<Col key={i} xs={4}>
							<button onClick={() => router.push(`/category/${slug}`)}>
								<Image fluid src={imageURL ? imageURL : '/images/avatar-shop.png'} alt={categoryName} />
								<span>{categoryName}</span>
							</button>
						</Col>
					))
				) : (
					<Col>
						<small className="text-danger">Categoy not found!</small>
					</Col>
				)}
			</Row>
		</Wrapper>
	);
};

type PropsType = {
	data: IParentCats[];
};

const Wrapper = styled.div`
	width: calc(100vw - 6rem);
	height: calc(100vh - 3.5rem);
	padding: 0.5rem;
	overflow: hidden;
	overflow-y: auto;

	button {
		width: 100%;
		min-height: 6.875rem;
		padding: 0.5rem 0;
		margin-bottom: 1rem;
		text-align: center;
		border-radius: 0.5rem;
		border: none;
		box-shadow: none;
		background-color: var(--light);
		line-height: 1rem;

		span {
			min-height: 2rem;
			font-size: 0.75rem;
			padding: 0 0.375rem;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
`;
