import { FormGroup } from '@components/atoms';
import { IconInput, IconInputWrapper } from '@components/molecules';
import Icon, { arrowLeft, search } from '@libs/icons';
import Router from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

export const HHelpMenu: FC = () => {
	return (
		<Wrapper>
			<Inner>
				<div className="Nav">
					<Icon path={arrowLeft} fill="black" width={20} height={20} onClick={() => Router.back()} />{' '}
					<p>Help Center</p>
				</div>
				<div className="Body">
					<h5 className="secondary-font">Welcome to the Help Center</h5>
					<p className="text-secondary">How can we help you, today?</p>
					{/* <div className="Search">
						<IconInput
							srOnly
							bgGray
							pill
							icon={search}
							width={28}
							height={28}
							fill="var(--secondary)"
							iconPosition="start"
							placeholder="Search for FAQ"
						/>
					</div> */}
				</div>
			</Inner>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	a {
		h5 {
			font-size: 14px;
			margin-top: 1rem;
			font-weight: 600;
			color: black !important;
		}
		p {
			font-size: 12px;
		}
	}
`;
const Inner = styled.div`
	width: 100%;
	background-color: var(--white);
	border-bottom-left-radius: 1.25rem;
	border-bottom-right-radius: 1.25rem;
	padding-bottom: 1rem;
	box-shadow: 0 0 8px #8a8a8a1a;

	.Nav {
		display: flex;
		align-items: center;
		background-color: white;
		padding: 1.25rem 1rem;

		p {
			font-size: 0.875rem;
			font-weight: 650;
			margin: 0 0 1px 0.5rem;
		}
	}
	.Body {
		text-align: center;
		margin-bottom: 0.25rem;

		.secondary-font {
			font-size: 2rem !important;
		}
		.Search {
			padding: 0 1.875rem;
			${IconInputWrapper} {
				${FormGroup} {
					margin-bottom: 0;
				}
				input {
					border: none;
					padding: 0.65rem 1rem 0.65rem 2.25rem;
					box-shadow: 0 0 2px #c9c9c919;
					background-color: #f5f5f5;
				}
				svg {
					top: calc(50% - 0.85rem);
				}
			}
		}
	}
`;
