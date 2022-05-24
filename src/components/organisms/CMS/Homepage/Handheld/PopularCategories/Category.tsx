import { Image, Link } from '@components/atoms';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const Category: FC<CategoryProps> = (props) => {
	const { title, slug, imageURL, altText } = props;

	return (
		<Fragment>
			<Link href={`/product/${slug}`} className="d-block text-decoration-none mb-2">
				<Wrapper>
					<Image fluid src={imageURL} alt={altText} />
				</Wrapper>
			</Link>
			<Link
				href={`/product/${slug}`}
				className="text-dark text-center d-block text-decoration-none mb-2"
				style={{ fontSize: '10px' }}
			>
				{title}
			</Link>
		</Fragment>
	);
};

export interface CategoryProps {
	slug: string;
	title: string;
	imageURL: string;
	altText: string;
}

const Wrapper = styled.div`
	width: 4.688rem;
	height: 4.688rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 0.5rem auto;
	border-radius: 100%;
	overflow: hidden;
	background-color: #f5f5f5;
`;
