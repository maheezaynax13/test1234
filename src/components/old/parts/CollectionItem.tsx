import { Image } from '@components/atoms';
import { CardWithBorder } from '@components/old/UI';
import { Collections } from '@modules/api/cms/interfaces';
import { formatNumber } from '@utils/helpers';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const CollectionItem: FC<Collections> = ({ count, image, title }) => (
	<Link href={image?.slug || '/'}>
		<a className="text-decoration-none">
			<CardWithBorder className="text-center mt-2 mb-2">
				<ImageWrap>
					<Image fluid src={image?.imageURL} alt={image?.altText} />
				</ImageWrap>
				<Header>{title}</Header>
				<small className="text-secondary">{formatNumber(count)}</small>
			</CardWithBorder>
		</a>
	</Link>
);

export default CollectionItem;

const ImageWrap = styled.div`
	height: 5.625rem;
	display: block;
	margin-bottom: 10px;

	img {
		width: auto;
		height: 90px;
	}
`;

const Header = styled.p`
	color: var(--secondary);
	font-weight: 500;
	margin-bottom: 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
