import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: 100%;
	height: 155px;
	display: block;
	margin-bottom: 10px;
	overflow: hidden;

	img {
		width: auto;
		height: 155px;
		margin: 0 auto;
	}
`;
export const Title = styled.p`
	height: 21px;
	color: var(--dark);
	font-size: 14px;
	margin: 8px 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Price = styled.h4`
	color: var(--dark);
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 0;
`;

export const OldPrice = styled.del`
	color: #b5b5b5;
	margin-bottom: 0;
`;

export const SlodCount = styled.span`
	color: #b5b5b5;
	font-weight: 400;
	margin-bottom: 0;
`;

export const DiscountBadge = styled.span`
	color: var(--primary);
	font-size: 13px;
	font-weight: 500;
	background-color: #dcffee;
`;
