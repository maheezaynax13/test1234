import styled from 'styled-components';

export const PageCount = styled.span`
	font-weight: 500;
	margin-left: 1rem;
`;

export const PagiItems = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;

	li {
		list-style: none;
		display: flex;
		margin: 0 2px;
	}
`;

export const PagiItemDots = styled.span`
	width: 2.125rem;
	height: 2.125rem;
	line-height: 2.125rem;
	text-align: center;
`;

export const PagiItem = styled.button`
	width: 2.125rem;
	height: 2.125rem;
	text-align: center;
	border-radius: 100%;
	color: #707070;
	padding: 0;
	border: 0;
	background-color: transparent;

	&:hover {
		background-color: #e9ecef;
	}

	&.active {
		color: var(--white);
		background-color: var(--primary);
	}

	&:disabled {
		&:hover {
			background-color: transparent;
		}
	}

	&.optional {
		width: auto;
		height: 2.125rem;
		color: var(--primary);

		&:hover {
			background-color: transparent;
		}
	}
`;

export const Wrapper = styled.div`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;

	@media (max-width: 767.98px) {
		width: 100%;
		display: block;
		text-align: center;

		${PagiItems} {
			overflow: hidden;
			justify-content: center;

			li {
				@media (max-width: 575.98px) {
					button.optional {
						display: none;
					}
				}
			}
		}

		${PageCount} {
			margin-top: 0.5rem;
			margin-left: 0;
			display: block;
		}
	}
`;
