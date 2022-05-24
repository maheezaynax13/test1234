import { FC } from 'react';
import styled from 'styled-components';

export const HandheldScroller: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
	width: calc(100% + 0.938rem);
	margin-right: -0.938rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	overflow: hidden;
	overflow-x: auto;
	padding-bottom: 10px;

	::-webkit-scrollbar {
		height: 3px;
		border-radius: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: #cbcbcb;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		margin-left: 9.5rem;
		margin-right: 9.5rem;
	}

	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: #999999;
	}

	@media (max-width: 325px) {
		::-webkit-scrollbar-track {
			margin-left: 8rem;
			margin-right: 8rem;
		}
	}

	& > a,
	button {
		min-width: 17.5rem;
		margin-right: 0.938rem;

		& > div {
			border: none;
			margin-bottom: 0;
			box-shadow: 0 0 0.375rem rgba(138, 138, 138, 0.1);
		}
	}
`;
