import { Card } from '@components/atoms';
import styled from 'styled-components';

export const GridWrapper = styled(Card)`
	width: 100%;
	display: block;
	padding: 0.625rem;
	margin-bottom: 1rem;
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 5.875rem;
	text-align: center;
	overflow: hidden;
	margin: 0 auto 0.5rem auto;
`;

export const Title = styled.p`
	height: 1.313rem;
	font-weight: 500;
	text-align: center;
	color: var(--dark);
	margin: 0.5rem 0 0.25rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const TotalCount = styled.p`
	font-size: 0.75rem;
	text-align: center;
	color: var(--light-gray);
	margin: 0;
`;
