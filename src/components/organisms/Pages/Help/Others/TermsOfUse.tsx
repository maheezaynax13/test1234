import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelpInfoWrapper } from './About';

export const TermsOfUse: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">Terms and Conditions</h3>}
						<p className="text-justify">
							At ZDrop we are here to assist you get and produce any products from Foreign
							Vendors/Suppliers/Sellers. We order products from Foreign Vendors/Suppliers/Sellers on
							behalf of you. We don't seem to be an on the spot seller. We are guaranteed to follow all of
							the terms of service and policy rules of Foreign Vendors/Suppliers/Sellers. We recommend you
							to require a glance at the terms of service before taking services from ZDrop.
						</p>

						<h5 className="mt-5">1. Before You Order:</h5>
						<p className="text-justify">
							1.1. In our country, some products are prohibited to import. Customs won't give the
							clearance of those products. So, we propose our users to not order those products. Here, we
							are mentioning a number of them but we recommend you learn more about what's prohibited in
							our country over the web. we recommend to not order products like
						</p>
						<ul>
							<li>Walkie-Talkie Set</li>
							<li>Drone, Knife</li>
							<li>Seeds</li>
							<li>Electric Cigarette/Vape</li>
							<li>Battery, Power Bank</li>
							<li>Heavyweight Product</li>
							<li>Sexual Products</li>
							<li>Fragile item etc.</li>
						</ul>
						<p className="text-justify">
							In case you place an order for the sexual product, you may get no refund because Foreign
							Vendors/Suppliers/Sellers doesn’t provide a refund for this.
							<br />
							We will not place the order if you request for these products. In case, unconsciously any
							order happens, we'll not take responsibility to supply clearance of this product.
						</p>
						<p className="text-justify">
							1.2. within the case of refund-related issues, any Foreign Vendors/Suppliers/Sellers
							judgment are going to be followed.
						</p>
						<p className="text-justify">
							1.3. we've to pay full advance to Foreign Vendors/Suppliers/Sellers. So, we also take full
							payment at a time before we place the order. We hold the order placing process until your
							payment confirmation earlier. there's no option for partial payment. 1.4. If you utilize our
							services and order products through ZDrop, then the merchandise is going to be received by
							ZDrop. After receiving the merchandise, we'll send it to your address for home delivery by
							courier service.
						</p>

						<h5 className="mt-5">2. Order Process:</h5>
						<p className="text-justify">
							2.1. We place the order manually. Usually, we take 24 to 48 hours to position your orders.
							just in case of any critical issue, the amount is quite mentioned.
						</p>
						<p className="text-justify">
							2.2. within the case of short-time offers, if we discover the offer time is over and also
							the price is beyond your order time; we are going to not place the order. We also don't
							order if we discover - Price is above the mentioned price
						</p>
						<ul>
							<li>Illegal Products</li>
							<li>High tax possibility</li>
							<li>Private shipping (Like DHL, DPEX, Aramex, etc.)</li>
							<li>Color/Size mismatched</li>
						</ul>
						<p className="text-justify">
							zDrop holds all the rights to not place any order. For whatever reason, if an order isn't
							purchased in Foreign Vendors/Suppliers/Sellers, we are going to notify the customer about
							the case. The customer can either take a refund for the merchandise or adjust the refunded
							amount with a more order. If any product isn't purchased, it can take up to 7 to 10 working
							days to process the item for refund. 2.3. During the entire process, you may receive updates
							from us. If you order one product, then the "Product Status" update is enough for you.
							Otherwise, if you order multiple products, you may also get the "Order Status" update.
							Product Status:
						</p>
						<ul>
							<li>You will get product status update in 5 stages. They are</li>
							<li>Pending (After you request for order)</li>
							<li>Purchased (After we purchase the merchandise at Foreign Vendors/Suppliers/Sellers)</li>
							<li>In Transit (After the tracking id is added to your product)</li>
							<li>Products Received (After we received the product)</li>
							<li>Delivered (After attending to you).</li>
							<li>Processing for Refund (After refund processed to your refund method)</li>
							<li>Refunded (After the refund is distributed to your refund method)</li>
						</ul>
						<p className="text-justify">
							2.4. Once the order is paid from our side, the order cannot be canceled anymore by the
							customer.
						</p>
						<p className="text-justify">
							<span className="font-weight-semibold">Order Status:</span> <br />
							If you order multiple products, then you'll get a "product status update" individually for
							every of your ordered products. And together you may get "order status update" like
						</p>
						<ul>
							<li>Pending (Until all the products being purchased)</li>
							<li>Processing (After purchasing all the products)</li>
							<li>Awaiting Delivery (After receiving all the products)</li>
							<li>Delivered (After planning to you</li>
						</ul>

						<h5 className="mt-5">3. Tracking:</h5>
						<p className="text-justify">
							3.1. we are going to provide the tracking number manually. it might take 5/7 days from your
							purchase request. Tracking numbers become available after the shipment of the merchandise by
							the vendor. Sometimes it may well be late thanks to vacation, shipment delay or big offers.
						</p>
						<p className="text-justify">
							3.2. In some cases, the tracking number won't be available thanks to changing the name or
							product details by the vendor. Then you'll get an update after receiving the merchandise.
						</p>

						<h5 className="mt-5">4. Product Receive Time:</h5>
						<p className="text-justify">
							4.1. what number days will its desire receive the products? <br />
							It depends on the time given by Foreign Vendors/Suppliers/Sellers. Usually, they furnish 40
							to 60 days'(At COVID situation it takes 40 to 100 days) time-frame to receive the products.
							consistent with our experience, we are able to say that it takes 20-30 days on the average
							to receive the products from Foreign Vendors/Suppliers/Sellers. Unregistered or untracked
							products take 30-50 days.
						</p>
						<p className="text-justify">
							4.2. the utmost time of reaching the merchandise is 90(AT COVID Time Normally 65Days) days.
							After this era, we appeal for a refund in Foreign Vendors/Suppliers/Sellers whether or not
							you don’t demand to try to so. Refund asking/Dispute process â€˜starts after 90(AT COVID
							Time Normally 65Days) days of not receiving the merchandise. A refund will only lean to you
							after Foreign Vendors/Suppliers/Sellers has refunded us. But if there are any critical
							situations like special offer time, long vacation, etc., then we recommend you wait as in
							those cases most products that are untraceable reaches us even after 90((AT COVID Time
							Normally 65Days)) days.
						</p>

						<h5 className="mt-5">5. Tax-related Discussion:</h5>
						<p className="text-justify">
							5.1. After reaching the merchandise we are going to add the tax amount with the invoice. you
							may be noticed through email. Then you wish to pay us before the delivery process.
						</p>
						<p className="text-justify">
							5.2. Why ZDrop is paying taxes so asking the purchaser to pay the amount? <br />
							It's needed to pay the tax immediately after reaching the products to customs. They don't
							hold the merchandise for quite 24 hours. So, there's no thanks to contact every single
							customer soliciting for paying tax. We pay the tax to receive the products at the proper
							time. The customer has no chance to pay the tax directly because Foreign
							Vendors/Suppliers/Sellers sends a shipment of products to our address.
						</p>
						<p className="text-justify">
							5.3. ZDrop won't provide you with the tax receipt thanks to business clearance. If you wish
							this badly, then you'll take an image or a photocopy. you're not allowed to kindle the most
							copy of the tax receipt.
						</p>
						<p className="text-justify">
							5.4. it is not possible to guess the number of taxes for all products sort of a mobile,
							smartwatch, heavyweight products, shoes, etc. But we've got a touch little bit of a concept.
							Sometimes this doesn't work all. So, you would like to pay the quantity that customs
							authority charges for your products during the clearance process.
						</p>
						<p className="text-justify">
							5.5. we do not add tax costs during the order process stage. So, we ask our users to pay the
							tax after getting the notice from the Post Office very well. We are guaranteed to pay the
							quantity whatever they charge for clearance.
						</p>

						<h5 className="mt-5">6. Product Delivery:</h5>
						<p className="text-justify">
							6.1. you'll receive delivery in 3 ways. Home Delivery Inside Dhaka: Delivery charge isn't
							included in your invoice. you would like to pay the courier service after receiving the
							merchandise. The delivery charge depends on the courier services pricing policy and it's
							going to vary from 50/- BDT to 300/- BDT betting on the packages size and weight. Home
							Delivery/Sundarban office outside Dhaka: Delivery charge isn't included in your invoice
							after you place the order. The delivery charge is going to be added to your invoice after
							products are received and delivery is processed. After you pay the invoice, we are going to
							book the parcel for delivery at Sundarban. The charge may vary from 100/- BDT to 300/- BDT
							looking on the packages size and weight. ZDrop Office Pickup: If you're willing to require
							delivery physically from our office address then you'll do so by changing your delivery
							address to the following: ZDrop Office Pickup. At the time of the delivery request, if your
							address is ready for office to select up, you'll take delivery from us the subsequent day,
							which is Sunday and Tuesday 10 AM to six PM. within the case of office pickup, no delivery
							charge is applicable. 6.2. We use eCourier, Sundarban and MoveOn in-house Courier Service
							for sending your products. Every Monday &amp; Friday is our scheduled shipment days.
						</p>
						<p className="text-justify">
							6.3. If we get all of your ordered items, automatically it'll be sent to your address
							through couriers. Alternatively, if you request us to deliver the products which already
							reached out of your ordered items, then we'll deliver them. the remainder of them are sent
							after getting them. Both of the time purchasers pay the courier charge.
						</p>
						<p className="text-justify">
							6.4 Delivery charge is taken per delivery, not per order. you'll be able to add 5 items in a
							very single order and take 5 times separately. therein case, you would like to pay a
							delivery charge 5 times. Again, if you are taking all 5 times after they arrive and take
							delivery of them directly, you wish to pay a delivery charge only 1 time.
						</p>

						<h5 className="mt-5">7. Return Policy:</h5>
						<p>
							We made our Return Policy easier for you to return a product if you receive a damaged or
							defective product or if the product is totally different from what was advertised earlier or
							when the package delivered is missing one or more products at the time of delivery. The
							eligibility for returning or replacing a product may be depend on the product category and
							conditions.
						</p>
						<p className="text-justify">
							<span className="font-weight-semibold">Conditions for return:</span> <br />
							In order to return or exchange any product sold through zDrop Website or App, you are
							required to comply with the below mentioned conditions,
						</p>
						<ul>
							<li>
								You must submit the return request of a product within 72 hours of delivery time. After
								72 hours of delivery time you will not be eligible for return request.
							</li>
							<li>
								Products should be returned unused, in their original packaging along with the original
								price tags, labels, packing, barcodes, user manual, warranty card and invoices,
								accessories, free promotional items (including but not limited to gifts/ points/wallet
								money) and original boxes defined as essentials. If any product is returned to us
								without the essentials, the product or gift items with the package will not be accepted
								for return and will be sent back to you.
							</li>
							<li>
								You must ensure that the return packages should be strongly and adequately packaged with
								caution so that there is no damage of products during transit.
							</li>
							<li>
								Damages due to neglect, improper usage or installation will not be covered under our
								Returns Policy.
							</li>
							<li>
								Replacement or exchange is subject to availability of stock of the supplier. If the
								product is out of stock or zDrop cannot manage to source the product by any means, you
								will receive a full refund, no questions asked.
							</li>
							<li>Product sold in sets/mix/package/bundle cannot be returned independently.</li>
							<li>
								Products with tampered or missing serial numbers will not be covered under our Returns
								Policy.
							</li>
							<li>Change of mind is not acceptable for a return request.</li>
							<li>
								The returned products are subject to verification and quality checks by zDrop Team in
								order to determine the legitimacy of the complaint or return.
							</li>
						</ul>
						<p className="text-justify">
							Please note that zDrop.com.bd is not obligated to refund the user's money what he/she paid
							until the product status changed to "Returned".
						</p>
						<p className="text-justify">
							<span className="font-weight-semibold">How to return:</span> <br />
							You can request a return by contacting us through phone ({process.env.HOTLINE_NUMBER}), Live
							Chat, or sending a ticket within 72 hours of your delivery. The item(s) will be picked up at
							a scheduled time convenient for you. You can also reach our team for further questions at{' '}
							<a href={`mailto:${process.env.SUPPORT_EMAIL}`}>{process.env.SUPPORT_EMAIL}</a>.
						</p>
						<p className="text-justify">
							There are two ways to return/replace the product to us. We offer a free pick-up service for
							your return/replacement In Dhaka City. But if you want to request for a return from other
							than Dhaka City, you will have to send the product on your own to our office address. Once
							we pick up or receive the product you returned, we will replace the product with a new one
							or we will proceed with the refund after we will do a quality check of the item at our end.
						</p>

						<h5 className="mt-5">8. Refund related:</h5>
						<p className="text-justify">
							8.1. As we discussed on policy 4.2, if you do not get the ordered products within 90((AT
							COVID Time Normally 65Days)) days, we'll start the refund process in Foreign
							Vendors/Suppliers/Sellers. But if there are any critical situations like natural disasters,
							long vacations, etc, we might prefer to suggest our users hold back.
						</p>
						<p className="text-justify">
							8.2. you'll claim a partial refund (Depend on Store's Judgement) for broken products. during
							this case, you would like to send some videos and still pictures as evidence.
						</p>
						<p className="text-justify">
							8.3. If the merchandise you received isn't the incorrect one, but you do not like this,
							there's no chance of product return. Foreign Vendors/Suppliers/Sellers has no policy on
							returning products. Therefore, in our business, there's no chance for returning products.
						</p>
						<p className="text-justify">
							8.4 just in case of broken, unusable or wrong product you wish to produce evidence that
							correctly shows the matter of the received product. If Foreign Vendors/Suppliers/Sellers
							determines that your product doesn't deserve any refund, then you'll not receive any refund.
						</p>
						<p className="text-justify">
							8.5 just in case of full or partial refund, only the merchandise item or refund amount
							received from Foreign Vendors/Suppliers/Sellers are going to be refunded to your designated
							refund method. payment gateway charge is non-refundable
						</p>

						<h5 className="mt-5">9. Support Policy:</h5>
						<p className="text-justify">
							9.1. we offer customer support via Facebook page inbox, Support Centre and Hotline.
						</p>
						<ul>
							<li>Facebook page inbox: active each day from 10 AM to 6 PM</li>
							<li>Support Centre: ticket reply average wait period 24 hours</li>
							<li>Hotline: Saturday to Thursday 10 AM to 6 PM</li>
						</ul>
						<p className="text-justify">
							9.2. within the case of support, our customer care agents are always dedicated to helping
							you along with your assigned order number. So, we propose you wait and see and polite if any
							delay happens.
						</p>

						<h5 className="mt-5">10. Foreign Vendors/Suppliers/Sellers Related Issue:</h5>
						<p className="text-justify">
							We never take any responsibility for the standard of the products. we do not provide any
							review of any product. we recommend you check the feedback and rating of a product from
							placing the order. We never provide any product warranty.
						</p>
						<p className="text-justify">
							ZDrop authority reserves the complete right to alter or modify these terms and conditions at
							any time without prior notice. If any changes are made, the revised terms and conditions are
							posted here on this website. So, we recommend customers check the newest information and
							updates posted here to tell you of any.
						</p>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};
