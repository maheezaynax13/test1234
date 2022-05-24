import { formatTitleCase } from '@utils/helpers';
import { FC } from 'react';
import styled from 'styled-components';

export const NavbarSlider: FC<PropsType> = ({ data, active, clickHandler }) => {
	if (data?.length > 0) {
		return (
			<Wrapper>
				{data.map((e, i) => (
					<li key={i} className={active === e ? 'active' : ''}>
						<button onClick={() => clickHandler(e)}>{formatTitleCase(e)}</button>
					</li>
				))}
			</Wrapper>
		);
	}

	return null;
};

type PropsType = {
	data: string[];
	active?: string;
	clickHandler: (e: string) => void;
};

const Wrapper = styled.ul`
	width: 100%;
	margin: 0;
	padding: 1rem 0.5rem;
	display: block;
	color: var(--white);
	background-color: #2b2b2b;
	display: flex;
	justify-content: space-around;

	li {
		text-align: center;
		list-style: none;
		display: inline-block;

		&.active {
			position: relative;

			&:after {
				content: '';
				bottom: -1rem;
				width: 100%;
				height: 0.25rem;
				display: block;
				position: absolute;
				background-color: var(--primary);
				border-top-left-radius: 0.625rem;
				border-top-right-radius: 0.625rem;
			}
		}

		button {
			color: var(--white);
			border: none;
			box-shadow: none;
			background: transparent;
		}
	}
`;
