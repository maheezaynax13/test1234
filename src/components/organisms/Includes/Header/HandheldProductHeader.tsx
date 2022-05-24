import { DropdownItem } from '@components/atoms';
import { BackButton, LabelDropdown } from '@components/molecules';
import { dotsMenu } from '@libs/icons';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const HandheldProductHeader: FC = () => {
	return (
		<Wrapper id="ProductNavbar">
			<Row>
				<Col xs={6}>
					<BackButton rounded />
				</Col>
				<Col xs={6} className="text-right">
					<NavWrapper>
						<NavContainer>
							{/* <IconButton path={search} width={20.5} height={20.5} fill="var(--white)" /> */}
							{/* <IconButton path={dotsMenu} width={20.5} height={20.5} fill="var(--white)" /> */}
							<LabelDropdown
								path={dotsMenu}
								width={20.5}
								height={20.5}
								fill="var(--white)"
								label=""
								alignRight
								className="RightNavItems"
							>
								<DropdownItem href="/">Home</DropdownItem>
							</LabelDropdown>
						</NavContainer>
					</NavWrapper>
				</Col>
			</Row>
		</Wrapper>
	);
};

const NavWrapper = styled.div`
	display: inline-block;
	min-width: 1.875rem;
	padding: 0.188rem;
	border-radius: 1.125rem;
	background-color: rgba(0, 0, 0, 0.5);
`;

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	.RightNavItems {
		padding: 0;

		& > div {
			width: 100%;
			display: block !important;
			text-align: center;
		}
	}
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 0.625rem;
	z-index: 99;

	&.active {
		background-color: var(--white);
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);

		button,
		${NavWrapper} {
			background-color: transparent;

			svg {
				fill: var(--light-gray);
			}
		}
	}
`;
