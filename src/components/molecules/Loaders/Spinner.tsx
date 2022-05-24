import { FC, HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner: FC<HTMLAttributes<HTMLDivElement>> = (props) => <Wrapper {...props} />;

const SpinnerBorder = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
	width: 1rem;
	height: 1rem;
	display: inline-block;
	border-radius: 50%;
	border: 0.2rem solid var(--border);
	border-right-color: transparent;
	animation: 0.75s linear infinite ${SpinnerBorder};
`;
