import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	position: relative;
	height: 100%;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	padding: 0;
	h6 {
		font-size: 0.825rem;
	}
	display: inline-block;
	&:not(:last-child) {
		margin-right: 0.825rem;
	}
`;

export const Menu = styled.div`
	z-index: 10;
	position: absolute;
	top: 32px;
	left: 0;
	width: 100%;
	border: 1px solid var(--border);
	overflow-wrap: break-word;
	overflow: hidden;
	background-color: var(--white);
	padding: 0.515rem;
	& p {
		margin: 0;
	}
	.InnerChild {
		margin: 0;
		& a {
			font-size: 0.825rem;
			color: #666666;
			text-decoration: none;
		}
	}
`;
