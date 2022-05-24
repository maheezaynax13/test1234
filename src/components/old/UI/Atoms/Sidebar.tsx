/* eslint-disable react/prop-types */
import { FC, Fragment, useEffect } from 'react';
import styled, { css } from 'styled-components';

export const Sidebar: FC<SidebarProps> = ({ children, onHide, ...rest }) => {
	useEffect(() => {
		if (rest.isActive) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}

		return () => {
			document.body.classList.remove('modal-open');
		};
	}, [rest]);

	return (
		<Fragment>
			<Wrapper {...rest}>
				<div className="Sidebar-Header">
					<CloseButton onClick={onHide} />
				</div>
				<div className="Sidebar-Body">{children}</div>
			</Wrapper>
			<Backdrop isActive={rest.isActive} onClick={onHide} />
		</Fragment>
	);
};

interface SidebarProps {
	isActive: boolean;
	isRight?: boolean;
	onHide?: () => void;
}

Sidebar.defaultProps = {
	isActive: false,
	isRight: false,
};

const Wrapper = styled.div<SidebarProps>`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 350px;
	height: 100vh;
	overflow-y: auto;
	z-index: 999;
	background-color: var(--white);
	box-shadow: ${({ isRight }) =>
		isRight ? '-2px 0 6px rgba(200, 200, 200, 0.157)' : '2px 0 6px rgba(200, 200, 200, 0.157)'};
	transition: all 0.2s ease-in-out;
	${({ isRight, isActive }) => {
		if (isRight) {
			if (isActive) {
				return css`
					right: 0;
				`;
			} else {
				return css`
					right: -380px;
				`;
			}
		} else {
			if (isActive) {
				return css`
					left: 0;
				`;
			} else {
				return css`
					left: -380px;
				`;
			}
		}
	}}

	.Sidebar {
		&-Header,
		&-Body {
			position: relative;
			display: block;
			width: 100%;
			text-align: left;
			padding: 15px 20px;
		}

		&-Header {
			& + .Sidebar-Body {
				padding-top: 0;
			}
		}
	}
`;

const CloseButton = styled.button`
	width: 16px;
	height: 16px;
	color: var(--black);
	border: 0;
	opacity: 0.5;
	padding: 0;
	margin: 0;
	background: transparent
		url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
		center/1em auto no-repeat;
	transition: all 0.4s ease-in-out;

	&:focus,
	&:hover {
		outline: none;
		opacity: 1;
	}
`;

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.25);
	z-index: 100;
	display: ${({ isActive }: { isActive: boolean }) => (isActive ? 'block' : 'none')};
`;
