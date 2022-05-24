/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from '@components/atoms';
import { useRouter } from 'next/router';
import { FC, MutableRefObject } from 'react';
import styled from 'styled-components';

export const NavLink: FC<PropsType> = ({ title, subtitle, href, ...rest }) => {
	const router = useRouter();

	return (
		<Wrapper href={href} {...rest}>
			<p className={`Title ${router.pathname === href ? 'active' : ''}`}>{title}</p>
			{subtitle && <span className="Subtitle font-secondary">{subtitle}</span>}
		</Wrapper>
	);
};
interface PropsType extends LinkProps {
	title: string;
	subtitle?: string;
	ref?: MutableRefObject<any>;
}

const Wrapper = styled(Link)`
	position: relative;

	.Title {
		margin-bottom: 0;

		&.active {
			color: var(--bs-primary);
		}
		&:hover {
			color: var(--bs-primary);
			/* transform: scale(1.1);
			transition: transform 0.2s ease-in-out; */
		}
	}
	.Subtitle {
		font-size: 0.825rem;
		font-weight: 500;
	}
`;
