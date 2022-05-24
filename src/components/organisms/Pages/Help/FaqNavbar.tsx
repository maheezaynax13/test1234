import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

export const FaqNavbar: FC<PropsType> = ({ data, isActive, clickHandler }) => {
	if (data && data.length > 0) {
		return (
			<Card className="mb-4">
				<Card.Header className="bg-white">
					<p className="font-weight-semibold mb-0">Help Topics</p>
				</Card.Header>
				<Card.Body>
					<NavItems>
						{data.map((e, i) => (
							<li key={i}>
								<Button
									variant="link"
									className={e === isActive ? 'isActive' : ''}
									onClick={() => clickHandler(e)}
								>
									{e}
								</Button>
							</li>
						))}
					</NavItems>
				</Card.Body>
			</Card>
		);
	}

	return null;
};

interface PropsType {
	data: string[];
	isActive: string;
	clickHandler: (tag: string) => void;
}

const NavItems = styled.ul`
	margin: 0;
	padding: 0;

	li {
		list-style: none;
		display: block;

		& + li {
			margin-top: 10px;
		}

		.btn {
			width: 100%;
			display: block;
			padding: 0;
			margin: 0;
			border: 0;
			color: var(--dark);
			text-align: left;
			position: relative;

			&:focus,
			&:hover {
				color: var(--primary);
				text-decoration: none;
				box-shadow: none;
			}

			&.isActive {
				color: var(--primary);

				&:before {
					content: '';
					width: 4px;
					height: 100%;
					position: absolute;
					top: 0;
					left: -21px;
					background-color: var(--primary);
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}
		}
	}
`;
