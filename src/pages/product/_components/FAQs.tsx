import { FAQItems } from '@utils/constants';
import { FC, Fragment } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const FAQs: FC<PropsType> = ({ data }) => {
	return (
		<Fragment>
			{data?.map(({ title, items }, i) => (
				<Fragment key={i}>
					<h5>{title}</h5>
					<AccordionListing defaultActiveKey="0" className="ListingAccordion">
						{items.map(({ question, answer }, j) => (
							<Card key={j + 1}>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="link" eventKey={`${j + 1}`}>
										{question}
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey={`${j + 1}`}>
									<Card.Body>{answer}</Card.Body>
								</Accordion.Collapse>
							</Card>
						))}
					</AccordionListing>
				</Fragment>
			))}
		</Fragment>
	);
};

export default FAQs;

interface PropsType {
	data: typeof FAQItems;
}

const AccordionListing = styled(Accordion)`
	margin-bottom: 30px;

	.card {
		border: 1px solid rgba(0, 0, 0, 0.125) !important;
		margin-bottom: 10px;
		border-radius: 0.25rem !important;

		&-header {
			padding: 0;
			border-bottom: 0;
			background-color: transparent;

			.btn-link {
				width: 100%;
				display: block;
				border: 0;
				font-size: 16px;
				font-weight: 500;
				text-align: left;
				padding: 12px 20px;

				&:hover,
				&:focus {
					text-decoration: none;
					box-shadow: none;
				}
			}
		}

		&-body {
			color: var(--secondary);
			padding-top: 0;
		}
	}
`;
