import { Button as Btn } from '@components/atoms';
import Icon, { arrowLeftS, arrowRightS } from '@libs/icons';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled, { css } from 'styled-components';

export const BackButton: FC<BackButtonProps> = ({ right, ...rest }) => {
	const { back } = useRouter();

	return (
		<Button onClick={back} {...rest}>
			<Icon path={right ? arrowRightS : arrowLeftS} fill={rest.rounded ? 'var(--white)' : 'var(--light-gray)'} />
		</Button>
	);
};

type BackButtonProps = {
	right?: boolean;
	rounded?: boolean;
};

const Button = styled(Btn)<Pick<BackButtonProps, 'rounded'>>`
	display: block;
	padding: 0.188rem;
	border-radius: 100%;
	border: none;
	background-color: transparent;

	${({ rounded }) => {
		if (rounded) {
			return css`
				background-color: rgba(0, 0, 0, 0.5);
			`;
		}
	}}
`;
