import styled from 'styled-components';
import { Wrapper as CardWrapper } from '../Card/styles';

export const TabContainer = styled(CardWrapper)`
	padding: 0;

	.Tab {
		&-Header {
			margin: 0;
			padding: 0 1rem;
			border-bottom: 1px solid var(--border);

			&__Single {
				list-style: none;
				display: inline-block;

				button {
					position: relative;
					padding: 1rem 1.563rem;
					border: 0;
					background-color: transparent;
				}

				&.isActive {
					button {
						&:after {
							position: absolute;
							content: '';
							width: 100%;
							height: 4px;
							left: 0;
							bottom: -1px;
							background-color: var(--primary);
							border-top-left-radius: 0.625rem;
							border-top-right-radius: 0.625rem;
						}
					}
				}
			}
		}

		&-Content {
			padding: 1rem 1.563rem;

			&__Single {
				display: none;

				&.isActive {
					display: block;
				}
			}
		}
	}
`;
