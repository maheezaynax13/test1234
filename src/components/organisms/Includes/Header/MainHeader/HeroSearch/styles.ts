import { DropdownWrapper, FormGroup } from '@components/atoms';
import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: block;
	position: relative;

	&.isFocused {
		.Searchbar {
			box-shadow: 0px 3px 6px rgba(138, 138, 138, 0.25);
		}
	}

	&.hasItems {
		.Searchbar {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	${DropdownWrapper} {
		min-width: 7.5rem;
		padding: 0 0.5rem 0 0.7rem;
		border-right: 1px solid var(--border);

		& > button {
			border: 0;
			height: 2.5rem;
			background-color: transparent;
			color: var(--dark);

			.SelectedCat {
				width: 5rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

		.DropdownList {
			background-color: var(--light);

			button {
				&:hover {
					background-color: white;
				}

				&.active {
					position: relative;
					color: var(--primary);

					&:before {
						content: '';
						width: 4px;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						background-color: var(--primary);
						border-top-right-radius: 4px;
						border-bottom-right-radius: 4px;
					}
				}
			}
		}
	}

	.Searchbar {
		width: 100%;
		height: 2.5rem;
		display: flex;
		align-items: center;
		border-radius: 1.5rem;
		border: 1px solid var(--border);
		background-color: var(--light);
		transition: box-shadow 0.2s ease-in-out;

		${FormGroup} {
			width: calc(100% - 3.25rem);
			margin-bottom: 0;

			input {
				border: none;
				background-color: transparent;

				&:focus {
					box-shadow: none;
				}
			}
		}
	}
`;

export const ResultsMenu = styled.div`
	position: absolute;
	width: 100%;
	padding: 0.5rem 0.75rem;
	margin-top: -1px;
	background-color: var(--light);
	border: 1px solid var(--border);
	border-bottom-left-radius: 1.5rem;
	border-bottom-right-radius: 1.5rem;
	box-shadow: 0px 3px 6px rgba(138, 138, 138, 0.25);

	ul {
		margin: 0 0 0.5rem 0;
		padding: 0;

		& + ul {
			padding-top: 0.5rem;
			border-top: 1px solid var(--border);
		}

		li {
			list-style: none;
			display: block;

			button {
				width: 100%;
				display: flex;
				align-items: center;
				text-align: left;
				padding: 0.315rem;
				border: none;
				color: var(--secondary);
				border-radius: 3px;
				background-color: transparent;
				transition: background-color 0.2s ease-in-out;

				svg {
					margin-right: 0.5rem;
				}

				&:hover {
					background-color: var(--border);
				}
			}
		}
	}
`;
