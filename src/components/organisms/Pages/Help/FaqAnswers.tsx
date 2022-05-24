import { IFAQs } from '@libs/api/interfaces';
import { FC, useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import VoteAnswer from './VoteAnswer';

export const FaqAnswers: FC<{ data: IFAQs['contents'][0] }> = ({ data }) => {
	const [isActive, setActive] = useState<string>('0');

	if (data && Object.keys(data).length > 0) {
		return (
			<FaqsWrapper>
				<Accordion defaultActiveKey="0" onSelect={(i) => setActive(i)}>
					{data?.questions.map(({ questionId, questionTitle, answer, res }, i) => (
						<Card key={i}>
							<Card.Header className="bg-white">
								<Accordion.Toggle
									block
									as={Button}
									variant="link"
									eventKey={`${i}`}
									className={isActive === `${i}` ? 'isActive' : ''}
								>
									{questionTitle}
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey={`${i}`}>
								<Card.Body>
									{answer}
									<VoteAnswer
										questionId={questionId}
										questionTypeId={data.questionTypeId}
										res={res}
									/>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					))}
				</Accordion>
			</FaqsWrapper>
		);
	}

	return null;
};

const FaqsWrapper = styled.div`
	.btn-link {
		padding: 0;
		border: 0;
		color: var(--dark);
		text-align: left;

		&:focus,
		&:hover {
			text-decoration: none;
			box-shadow: none;
		}
	}

	.card {
		border-radius: 5px !important;
		border: 1px solid rgba(0, 0, 0, 0.125) !important;

		& + .card {
			margin-top: 15px;
		}

		&-header {
			padding: 0;
			border-bottom: 0;

			.btn-link {
				padding: 12px 32px 12px 20px;
				position: relative;

				&:after {
					content: '';
					position: absolute;
					right: 12px;
					top: calc(50% - 8px);
					width: 16px;
					height: 16px;
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'/%3E%3C/svg%3E");
					background-color: var(--white);
					transition: transform 0.5s ease-in-out;
					z-index: 9;
				}

				&.isActive {
					&:after {
						transform: rotate(-45deg);
					}
				}
			}
		}

		&-body {
			color: #999999;
			padding-top: 0;
		}

		.collapse.show {
		}
	}
`;
