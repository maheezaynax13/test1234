import { ElementSize } from '@components/atoms/interfaces';
import { BadgeLight } from '@components/molecules';
import { formatPrice } from '@utils/helpers';
import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const ProductPrice: FC<ProductPriceProps> = ({ current, old, discount, ...rest }) => (
	<Price {...rest}>
		<PriceCurrent>{formatPrice(current)}</PriceCurrent>
		{old > 0 && <PriceOld>{formatPrice(old)}</PriceOld>}
		{discount && <OfferBadge pill>{discount}</OfferBadge>}
	</Price>
);

ProductPrice.defaultProps = {
	size: 'md',
};

export interface ProductPriceProps extends HTMLAttributes<HTMLDivElement> {
	size?: Extract<ElementSize, 'md' | 'lg'>;
	current: number;
	old: number;
	discount: string;
}

const PriceCurrent = styled.span`
	color: var(--dark);
`;

const PriceOld = styled.del`
	color: #cecece;
	margin-left: 20px;
`;

const OfferBadge = styled(BadgeLight)`
	font-weight: normal;
	padding: 0 0.625rem;
	margin-left: 1.25rem;
`;

const Price = styled.div<Pick<ProductPriceProps, 'size'>>`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	${({ size }) => {
		if (size === 'lg') {
			return css`
				${PriceCurrent} {
					font-size: 25px;
					font-weight: 500;
				}

				${PriceOld} {
					font-weight: 500;
				}
			`;
		}
	}}
`;
