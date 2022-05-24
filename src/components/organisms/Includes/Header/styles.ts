import { IconDropdown as IDropdown, LabelDropdown as LDropdown } from '@components/molecules';
import styled, { css } from 'styled-components';

export const Header = styled.header<{ isShadow: boolean }>`
	width: 100%;
	padding: 0.823rem 0;
	position: sticky;
	top: 0;
	border-bottom: 1px solid var(--border);
	background-color: var(--white);
	z-index: 99;

	${({ isShadow }) => {
		if (isShadow) {
			return css`
				border-color: transparent;
				box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
			`;
		}
	}}
`;

const dropdownStyles = css`
	padding: 0;
	border: 0;
	min-height: 2.25rem;

	& ~ .DropdownList {
		top: 3.7rem;
	}
`;

export const IconDropdown = styled(IDropdown)`
	${dropdownStyles}
`;

export const LabelDropdown = styled(LDropdown)`
	${dropdownStyles}
`;

export const ListGroup = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;

	& > * {
		list-style: none;
		display: inline-block;
		margin: 0 1rem;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}
	}
`;

export const HandheldHeader = styled.header`
	width: 100%;
	padding: 0.625rem 0.469rem;
	position: sticky;
	top: 0;
	background-color: var(--white);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.29);
	z-index: 99;
`;
