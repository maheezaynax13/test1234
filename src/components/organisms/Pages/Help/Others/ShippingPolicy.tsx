import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelpInfoWrapper } from './About';

export const ShippingPolicy: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">Shipping Policy</h3>}
						<p className="text-justify">
							At zDrop Bangladesh ltd., customer gratification is our top priority, and this is why we
							accept the ultima care to deliver your products avowedly to you as securely and fast as
							possible. Our shipping scheme ease your everyday life, upbringing your focus on your
							priorities and not on our logistics.
						</p>

						<p className="text-justify">
							Rarely feasible delays due to an aerial volume of orders or postal service problems that are
							outside of our control.
						</p>

						<h5 className="mt-5">Domestic Shipping:</h5>
						<p className="text-justify">
							As a customer you can order anytime (24/7) you keen on. Our devoted zDrop quality assurance
							wing works round the clock personally to make sure the prim packages reach on time. Our
							services are at your doorsteps with the bottom delivery charge. We procedure all deliveries
							through nominal courier service as well as our in-house delivery wing. We deliver products
							all over the Bangladesh. If there is any interchange in delivery charge for a particular
							item, it will be mentioned in product details.
						</p>

						<h5 className="mt-5">Standard Delivery:</h5>
						<p className="text-justify">
							If your delivery location is within Dhaka city, products will be delivered by within 2-3
							working days (excluding weekends and holidays) after product pick-up. If it is apart from
							Dhaka then it will accept 5-7 working days (excluding weekends and holidays) after product
							pick-up. If you order after 6 PM, it will be envisaged as an order of next business day. You
							will be obtained notification when your order has shipped.
						</p>
						<p className="text-justify">We offer 60tk flat rate shipping to all over Dhaka.</p>
						<p className="text-justify">
							Order confirmation and delivery entirely are subject to product availability. Delivery time
							may vary from one item to another.
						</p>

						<h5 className="mt-5">Our Business Day:</h5>
						<p className="text-justify">Saturday to Thursday besides public holidays.</p>

						<h5 className="mt-5">Same Day Delivery:</h5>
						<ul>
							<li>Merely applicable for elected Vendors' Order delivery inside Dhaka city.</li>
							<li>Same-day delivery stare 50 takas as a delivery charge.</li>
							<li>Orders placed earlier on 8:00 pm will be envisage for same-day delivery.</li>
							<li>Products which are stored at our office are only compatible for same-day delivery.</li>
							<li>
								Order procedure time computation will start afterwards the order is procedure by one of
								our Customer Service agents.
							</li>
							<li>
								Customer can insistence for canceling any order if he/she doesn't agree with the same
								day delivery terms & conditions.
							</li>
						</ul>

						<h5 className="mt-5">Delivery for Global Products:</h5>
						<p className="text-justify">
							There are some anomalous items that we import from outside Bangladesh. These items can
							consider 10-30 days or more days to reach you. However, you will obtain your order within
							the time specified.
						</p>
						<p className="text-justify">
							You can make your purchases on zDrop Bangladesh ltd. and feel like delivery from anywhere in
							the world. Delivery charge differ according to customers’ country of location. In case of
							paid order, zDrop Bangladesh ltd. cannot be held accountable if customer does not obtain it
							within 2 months.
						</p>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};
