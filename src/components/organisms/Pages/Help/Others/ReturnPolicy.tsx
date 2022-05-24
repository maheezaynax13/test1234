import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelpInfoWrapper } from './About';

export const ReturnPolicy: FC<PropsType> = ({ isMobile = false }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">Return & Warranty Policy</h3>}
						<p className="text-justify">
							At zDrop Bangladesh Ltd., all our products are unused and in their original packaging.
							However, because of manufacturer or logistics errors, defects or problems may occur and
							we'll do our absolute best to resolve your issue as soon as possible.
						</p>

						<p className="text-justify">
							Some of our products are shipped out with a global warranty, so if there is any manufacturer
							fault in your shipment, please contact us and that we will advise you on the next step. If,
							however, the defect is from our end, we will accept your product and exchange it for a new
							one.
						</p>
						<p className="text-justify">
							If you are unsatisfied with your purchase for any reason, or it did not present itself to
							you as advertised, ZDrop Bangladesh Ltd. will issue you a full warranty or store credit for
							the product, provided that it is returned to us new condition in its original packaging.
							We'll also pay the return shipping costs if the result is of our error. If the reason for
							return isn't a result of our error, the cost of return shipping will be deducted from your
							warranty.
						</p>
						<p className="text-justify">
							Items such as garments and personal grooming products cannot be warrantied once opened or
							used. You can request a return by contacting us through phone, Live Chat, or sending email
							within 07 calendar days of your delivery. The item(s) are going to be picked up at a
							scheduled time convenient for you. Warranty’s will be processed as soon as the item is
							received by us. Warranty’s may take 2-7 business days to show on your credit/debit card
							statement.
						</p>
						<p className="text-justify">We hope you enjoy your shopping experience with us!</p>
						<p className="text-justify">(Last Updated: February 28 2021)</p>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};

interface PropsType {
	isMobile?: boolean;
}
