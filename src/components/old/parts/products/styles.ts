import styled from 'styled-components';

export const Block = styled.div`
	width: 100%;
	display: inline-block;

	a {
		min-height: inherit;
		padding: 3.75px 3.75px 10px;
		margin: 0;
		border-radius: 10px;
		display: block;

		&:hover {
			text-decoration: none;
		}
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

