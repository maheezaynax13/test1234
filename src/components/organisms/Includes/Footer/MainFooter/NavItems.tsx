import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const NavItem: FC<NavItemProps> = ({ link, title }) => (
	<Link href={link}>
		<a>{title}</a>
	</Link>
);

export const NavItems: FC = () => (
	<NavItemGroup>
		<NavItem link="/help" title="Help" />
		<NavItem link="/about" title="About zDrop" />
		<NavItem link="/terms-of-use" title="Terms & Conditions" />
		<NavItem link="/privacy-policy" title="Privacy Policy" />
	</NavItemGroup>
);

interface NavItemProps {
	link: string;
	title: string;
}

const NavItemGroup = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		color: var(--dark);
		font-weight: 500;
		margin: 0 0.5rem;
	}
`;
