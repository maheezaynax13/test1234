import { Badge, Card } from '@components/atoms';
import { IconButton } from '@components/molecules';
import styled from 'styled-components';

export const GridWrapper = styled(Card)`
	width: 100%;
	min-height: 16.688rem;
	display: block;
	padding: 0.625rem;
	margin-bottom: 1rem;
	overflow: hidden;
	border: 0;
	box-shadow: 0px 0px 3px rgba(138, 138, 138, 0.19);

	@media (max-width: 767.99px) {
		min-height: 0;
	}
`;

export const ImageWrapper = styled.div`
	margin-top: -0.625rem;
	margin-left: -0.625rem;
	margin-right: -0.625rem;
	margin-bottom: 0.75rem;
`;

export const Title = styled.p`
	height: 1.313rem;
	color: var(--dark);
	margin: 0.5rem 0 0.25rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Price = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: var(--dark);
	margin-bottom: 0;
`;

export const OldPrice = styled.del`
	font-size: 0.875rem;
	font-weight: 400;
	color: var(--light-gray);
	margin-bottom: 0;
`;

export const OfferBadge = styled(Badge)`
	padding: 0 0.5rem;
	float: right;
`;

export const FilterWrapper = styled.div`
	width: 16.25rem;
	margin-right: 1rem;
	display: inline-block;
	vertical-align: top;

	@media (max-width: 767.98px) {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 18.75rem;
		height: 100%;
		padding: 1rem;
		margin-right: 0;
		overflow: hidden;
		overflow-y: auto;
		background-color: var(--white);
		transition: 0.3s;
		box-shadow: 0 0 6px rgba(138, 138, 138, 0.24);
		z-index: 1041;

		& > div {
			border-right: 0;

			& > div {
				&:last-child {
					border-bottom: 0;
				}
			}
		}
	}
`;

export const FilterButton = styled(IconButton)`
	color: var(--secondary);
	font-weight: 500;
	display: flex;
	align-items: center;
	position: absolute;
	top: 1.8rem;
	right: 0.5rem;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const ListWrapper = styled.div`
	width: calc(100% - 17.25rem);
	margin-right: 0;
	margin-top: 1rem;
	display: inline-block;
	vertical-align: top;

	@media (max-width: 767.98px) {
		width: 100%;
	}
`;
