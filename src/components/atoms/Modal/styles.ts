/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { ModalProps } from '.';

export const BodyWrapper = styled.div`
	display: block;
	padding: 0.625rem 1rem;
`;

export const Wrapper = styled.div<Pick<ModalProps, 'size' | 'isActive'>>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 1060;

	.Dialog {
		${({ size }) => {
			switch (size) {
				case 'sm':
					return css`
						width: 18.75rem;
					`;

				case 'lg':
					return css`
						width: 50rem;
					`;

				case 'xl':
					return css`
						width: 100%;
					`;

				default:
					return css`
						width: 31.25rem;
					`;
			}
		}}
		min-height: calc(100% - 3rem);
		margin: 1.5rem auto;
		display: flex;
		align-items: center;

		&-Content {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			border-radius: 0.625rem;
			background-color: var(--white);
		}

		&-Close {
			position: absolute;
			right: 0.5rem;
			top: 0.5rem;
			z-index: 99;
		}

		@media (max-width: 767.99px) {
			${({ size }) => {
				switch (size) {
					case 'sm':
						return css`
							width: 18.75rem;
						`;
					default:
						return css`
							width: 100%;
						`;
				}
			}}
		}
	}
`;
