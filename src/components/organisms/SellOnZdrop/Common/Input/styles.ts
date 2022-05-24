import styled from 'styled-components';
import { InputProps } from '.';

export const InputWrapper = styled.input<InputProps>`
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	width: 100%;
	padding: 13px;
	height: 50px;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield; /* Firefox */
	}
	::placeholder {
		color: #cbcbcb;
	}
	:focus {
		outline: none;
	}
`;
