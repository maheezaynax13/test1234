import { ImageListItems } from '@components/old/styles/productStyles';
import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
	margin-bottom: 15px;
`;

export const shaking = keyframes`
	0%, to {
		transform: translateZ(0);
	}
	10%, 30%, 50%, 70%, 90% {
		transform: translate3d(-3px, 0, 0);
	}
	20%, 40%, 60%, 80% {
		transform: translate3d(3px, 0, 0);
	}
`;

export const Container = styled.div`
	position: relative;
	padding: 10px;
	margin-left: -10px;
	margin-bottom: 5px;
	border: 1px solid transparent;
	border-radius: 5px;

	&.isRequired {
		animation: ${shaking} 0.4s cubic-bezier(0, 0, 0.3, 1) 1;
		background: #fff7f8;
		border-color: #f0f0f0;

		p {
			color: var(--danger);
		}

		ul {
			li:not(:hover) {
				border-color: var(--danger);
			}
		}
	}
`;

export const ListItems = styled(ImageListItems)`
	li {
		width: auto;
		height: auto;
		padding: 3px;
		opacity: 1;
		background-color: var(--white);
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;

		&:hover,
		&.active {
			box-shadow: inset 0 0 0 1px var(--primary);
		}

		img {
			width: 50px;
			height: 50px;
		}

		span {
			padding: 2px 10px;
			display: block;
		}
	}
`;

export const Title = styled.p`
	font-weight: 500;
	margin-bottom: 8px;
`;
