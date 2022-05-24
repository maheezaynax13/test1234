import { FC } from 'react';
import styled from 'styled-components';
import { Image } from '@components/atoms';

export const SSLSeal: FC = () => (
	<div className="w-100 text-center">
		<Image fluid src="/images/shopping/ssl-stamp.png" alt="SSL Signature" />
		<Header>
			<span className="text-primary">SSL</span> Secure Payment
		</Header>
	</div>
);

const Header = styled.h3`
	color: var(--dark);
	margin: 0.938rem 0 1.875rem;
	font-size: 1rem;
	font-weight: 500;
	text-transform: uppercase;
`;
