import Icon, { arrowLeft } from '@libs/icons';
import Router from 'next/router';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const HandheldSecondaryLayout: FC<PropsType> = ({ title, children }) => {
	return (
		<Fragment>
			<Nav>
				<Icon path={arrowLeft} fill="black" width={20} height={20} onClick={() => Router.back()} />{' '}
				<p>{title}</p>
			</Nav>
			<main style={{ backgroundColor: '#FCFCFC', minHeight: 'calc(100vh - 64px)' }}>{children}</main>
		</Fragment>
	);
};

interface PropsType {
	title: string;
}

const Nav = styled.header`
	display: flex;
	align-items: center;
	background-color: white;
	padding: 1rem;
	border-bottom: 2px solid rgba(179, 179, 179, 0.1);

	p {
		font-size: 0.875rem;
		font-weight: 650;
		margin: 0 0 1px 0.5rem;
	}
`;
