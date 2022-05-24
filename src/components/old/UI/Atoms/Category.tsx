import Link from 'next/link';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Category = ({ imageUrl, link, title, altText }: ICategory): JSX.Element => {
	return (
		<Container>
			<Link href={`/${link}`} passHref>
				<Wrapper>
					<Image fluid src={imageUrl} alt={altText} />
				</Wrapper>
			</Link>
			{title && <Title>{title}</Title>}
		</Container>
	);
};

export default Category;

export interface ICategory {
	imageUrl: string;
	link: string;
	title?: string;
	altText?: string;
}

const Container = styled.div`
	text-align: center;
`;

const Wrapper = styled.a`
	width: 167px;
	height: 167px;
	display: block;
	margin: 15px auto 0;
	border-radius: 100%;
	overflow: hidden;
	background-color: var(--white);
`;
export const Title = styled.p`
	height: 21px;
	color: var(--white);
	font-size: 14px;
	margin: 8px 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
