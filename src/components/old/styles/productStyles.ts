import styled from 'styled-components';

export const SectionHeader = styled.h3`
	color: var(--dark);
	font-size: 1rem;
	margin: 0;
	text-transform: uppercase;
`;

export const MoreLink = styled.div`
	a {
		color: var(--dark);
		font-weight: 500;
		margin-right: 5px;
	}
`;

export const ListItems = styled.ul`
	margin: 0;
	padding: 0;

	li {
		margin: 0 4px;
		display: inline-block;
	}
`;

export const ImageListItems = styled.ul`
	margin: 0;
	padding: 0;

	li {
		width: 58px;
		height: 58px;
		cursor: pointer;
		overflow: hidden;
		list-style: none;
		display: inline-block;
		padding: 3px;
		margin: 0 4px;
		opacity: 0.5;
		border: 1px solid #ececec;
		border-radius: 5px;

		&:first-child {
			margin-left: 0;
		}

		&:hover,
		&.active {
			opacity: 1;
			border-color: var(--primary);
		}

		img {
			display: block;
			margin: auto;
			width: auto;
			height: 100%;
		}
	}
`;
