import { BadgeByStatus } from '@components/molecules';
import styled from 'styled-components';
import { Price as DPrice } from '../styles';

export const GridWrapper = styled.div`
	width: 100%;
	display: block;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: auto;
	border-radius: 0.313rem;
	background-color: var(--white);
	overflow: hidden;
	margin-bottom: 0.313rem;

	& > div {
		margin-bottom: 0;
	}
`;

export const Title = styled.p`
	color: var(--dark);
	margin-bottom: 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Price = styled(DPrice)`
	font-size: 0.813rem;
`;

export const OfferBadge = styled(BadgeByStatus)`
	padding: 0 0.5rem;
	font-size: 0.75rem;
	border: 0;
`;
