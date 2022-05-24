import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelpInfoWrapper } from './About';

export const RefundPolicy: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">Refund Policy</h3>}
						<p className="text-justify">
							Thanks for shopping at zDrop Bangladesh ltd. If you are not completely gratified with your
							purchase, simply return!
						</p>

						<h5 className="mt-5">Returns</h5>
						<p className="text-justify">
							Bought anything online, but it’s not what you look for it to be. Don’t worry, we’re here for
							you You have 2 days to retire an item from the date you obtained it. To be worthy for a
							return, your item must be void and in the same condition that you received it. Here's how to
							return an item:
						</p>
						<ol>
							<li>
								Send the item you desire to return along with all actual packing materials and
								accessories
							</li>
							<li>If attainable, attach the packing slip that came with the item</li>
							<li>
								If you don’t have the actual packing slip, you can sign in to your account, Picked the
								order and then print out a Facile Returns Receipt.
							</li>
							<li>
								Dissimilar other companies, zDrop Bangladesh ltd. DOES NOT charge restocking or service
								fees when you return a product so repose facile knowing that when you want your money
								back - we give it all back.
							</li>
						</ol>

						<h5 className="mt-5">In Case of Pre-Payment:</h5>
						<p className="text-justify">
							Once we receive your item, we will review it and acquaint you that we have received your
							returned item. We will instantly acquaint you on the status of your refund after reviewing
							the item. If your return is approved, we will initiate a refund to your credit card (or
							actual method of payment). Allusions:
						</p>
						<ul>
							<li>
								Once your return arrives at one of our warehouses, a zDrop Bangladesh ltd. return
								specialist will review the shipment, usually within one day and a credit will be applied
								to the payment system used on the actual order. <br />
								Please Note:Few credit cards may take an additional 2-10 days for the credit to display
								on your account so allow as much as 14 days for the credit to be applied.
							</li>
						</ul>

						<h5 className="mt-5">In Case of Cash on Delivery (COD):</h5>
						<p className="text-justity">
							Merely inform the delivery executive of your adjudication to return the product on arrival.
							You are entitled to apprehend a No Questions Asked (NQA) privilege as a valuable client. If
							the delivery executive abdicates to respond accordingly simply take an extra effort to call
							the customer service hot line 09638 121212
						</p>
						<p className="text-justify">Our bKash Merchant No.: 01961900400</p>

						<h5 className="mt-5">Shipping</h5>
						<ul>
							<li>
								Any shipping cost connected to the cancellation or delivery of the merchandise will not
								be tunicate by NQA privilege facility.
							</li>
							<li>
								Home delivery for outside Dhaka isn't attainable but you can gather the goods from your
								nearest E-Courier and Sundarbans (or any other) Courier offices.
							</li>
						</ul>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};
