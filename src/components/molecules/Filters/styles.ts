import { Button as Btn } from '@components/atoms';
import styled, { css } from 'styled-components';

export const Button = styled(Btn)`
	display: flex;
	align-items: center;
	color: var(--secondary);
	padding: 0;

	svg {
		margin-left: 0.5rem;
	}
`;

export const DropdownMenu = styled.div`
	position: absolute;
	padding: 1rem 0.5rem;
	margin: 0;
	top: 100%;
	left: 0;
	z-index: 99;
	background-color: var(--white);
	border: 1px solid var(--border);
	border-radius: 0.625rem;
	box-shadow: 0 0 0.375rem rgba(138, 138, 138, 0.19);

	input {
		min-width: 4.375rem;
	}

	.ButtonGo {
		min-width: 2.5rem;
		border-radius: 50%;
		margin-left: 0.625rem;
		text-align: center;
		padding-left: 0;
		padding-right: 0;
	}

	li {
		display: block;
		list-style: none;

		.ButtonItem {
			display: block;
			width: 100%;
			text-align: left;
			border: 0;
			padding: 0.315rem;
			color: var(--secondary);
			border-radius: 0.315rem;
			background-color: transparent;

			&:hover {
				background-color: var(--light);
			}

			&.active {
				color: var(--white);
				background-color: var(--primary);
			}
		}
	}
`;

export const SearchWrapper = styled.div`
	max-width: 17.75rem;
	position: relative;
	margin-left: auto;

	input {
		background-color: #fafafa;
		padding-right: 2.5rem;
	}

	button {
		position: absolute;
		width: 2.5rem;
		height: 100%;
		top: 0;
		right: 0;
	}

	@media (max-width: 767.98px) {
		max-width: 100%;
	}
`;

export const SectionWrapper = styled.div<{ isActive?: boolean }>`
	padding: 1rem 0.5rem 1rem 0;
	border-bottom: 1px solid var(--border);

	&:first-child {
		padding-top: 0;
	}

	.Header {
		color: var(--dark);
		font-weight: 500;
		margin-bottom: 0;
		cursor: pointer;

		svg {
			float: right;
		}
	}

	.ClearButton {
		padding: 0.219rem 0.8rem;
	}

	.OptionWrapper {
		max-height: 0;
		overflow: hidden;
		overflow-y: auto;
		transition: max-height 0.15s ease-out;

		${({ isActive }) => {
			if (isActive) {
				return css`
					max-height: 15rem;
					margin-top: 0.5rem;
				`;
			}
		}}

		label {
			color: var(--secondary);
		}
	}
`;
