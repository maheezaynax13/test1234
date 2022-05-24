import { BadgeLight } from '@components/molecules';
import { ISingleProduct } from '@libs/api/interfaces';
import Icon, { IconProps, star } from '@libs/icons';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const ProductReview: FC<ProductReviewProps> = (props) => {
	const {
		productReview: { averageRating, totalRating, totalReviewCount },
		orderCount,
		width,
		height,
		...rest
	} = props;
	const iconProps = { width, height };

	return (
		<Wrapper {...rest}>
			<BadgeLight pill className="d-flex align-items-center">
				{Number(averageRating) > -1 ? averageRating : 0}{' '}
				<Icon {...iconProps} path={star} fill="var(--primary)" className="ml-1" />
			</BadgeLight>
			<SummaryText>{totalRating} Ratings</SummaryText>
			<SummaryText>{totalReviewCount} Reviews</SummaryText>
			<SummaryText>{orderCount} Orders</SummaryText>
		</Wrapper>
	);
};

ProductReview.defaultProps = {
	width: 14,
	height: 14,
};

type ProductReviewProps = Pick<ISingleProduct, 'productReview' | 'orderCount'> &
	HTMLAttributes<HTMLDivElement> &
	Pick<IconProps, 'width' | 'height'>;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 15px;
`;

const SummaryText = styled.span`
	color: var(--secondary);
	margin-left: 20px;
`;
