/* eslint-disable indent */
import { BadgeProps } from '@components/atoms';
import { hexToRgba } from '@utils/helpers';
import { FC } from 'react';
import styled, { css } from 'styled-components';

export const BadgeByStatus: FC<BadgeByStatusProps> = ({ children, ...rest }) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};

BadgeByStatus.defaultProps = {
	variant: 'PENDING',
	outline: 'light',
	rounded: false,
	pill: false,
};

export interface BadgeByStatusProps extends Omit<BadgeProps, 'variant'> {
	variant?: keyof typeof statusList;
	outline?: 'none' | 'light' | 'dark';
}

export const Wrapper = styled.span<BadgeByStatusProps>`
	display: inline-block;
	padding: 0.219rem 1rem;
	${({ variant, outline }) => {
		switch (outline) {
			case 'none':
				return css`
					color: ${statusList[variant]};
					background-color: transparent;
					border: ${`1px solid ${statusList[variant]}`};
				`;

			case 'light':
				return css`
					color: ${statusList[variant]};
					background-color: ${hexToRgba(statusList[variant], 0.1)};
					border: ${`1px solid ${hexToRgba(statusList[variant], 0.1)}`};
				`;

			case 'dark':
				return css`
					color: var(--white);
					background-color: ${statusList[variant]};
					border: ${`1px solid ${statusList[variant]}`};
				`;
		}
	}}
	${({ rounded, pill }) => {
		if (rounded) {
			return css`
				border-radius: 0.25rem;
			`;
		} else if (pill) {
			return css`
				border-radius: 50rem;
			`;
		}
	}};
`;

export const statusList = {
	PENDING: '#FCC200',
	CONFIRMED: '#00b55b', // CONFIRMED: '#00E600',
	CANCELLED: '#FF052A',
	REFUND_REQUEST_IN_PROCESS: '#0877FF',
	REFUNDED: '#B508FF',
	PICKUP_IN_PROGRESS: '#00BC58',
	PICKED: '#0877FF',
	ARRIVED_AT_OUR_WAREHOUSE: '#0877FF',
	SHIPPED: '#A54C59',
	DELIVERY_ATTEMPT_FAILED: '#FF052A',
	DELIVERED: '#00BC58',
	RETURN_REQUEST_IN_PROCESS: '#854873',
	RETURN_REQUEST_APPROVED: '#35DB35',
	RETURN_REQUEST_REJECTED: '#FF052A',
	RETURNED: '#00BC58',
	COD: '#5608FF',
	PAID: '#00BC58',
	UNPAID: '#FF052A',
	PARTIAL: '#FCC200',
	LOW: '#FCC200',
	NORMAL: '#00BC58',
	HIGH: '#FF052A',
};

export type IStatus = keyof typeof statusList;
export type IPriorityStatus = Extract<IStatus, 'LOW' | 'NORMAL' | 'HIGH'>;
export type IPaymentStatus = Extract<IStatus, 'COD' | 'PAID' | 'UNPAID' | 'PARTIAL'>;
export type IOrderStatus = Exclude<IStatus, IPaymentStatus | IPriorityStatus>;
