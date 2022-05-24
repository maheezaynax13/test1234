import { Brand } from '@components/molecules';
import { FC } from 'react';
import styled from 'styled-components';
import { Copyright } from '../Copyright';
import { SocialLinks } from '../SocialLinks';

export const HandheldMainFooter: FC = () => (
	<Footer>
		<Brand isClickable width={83} />
		<SocialLinks />
		<Copyright />
	</Footer>
);

const Footer = styled.footer`
	width: 100%;
	padding: 2rem 0.469rem;
	display: block;
	text-align: center;
`;
