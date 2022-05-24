import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelpInfoWrapper } from './About';

export const PrivacyPolicy: FC<PropsType> = ({ isMobile = false }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">Privacy Policy</h3>}
						<h5 className="mt-0">Our Promise</h5>
						<p className="text-justify">
							zDrop Bangladesh ltd. is all about you – our consumer and peer, our suppliers and our
							business associates – so we truly honor our relevance with you and the trust you land in
							with us.
						</p>
						<p className="text-justify">
							Dignity for the Individual is at the bosom of all we commit, so we do accept our
							responsibilities to every one of you, concerning your Privacy and Private Information, very
							seriously.
						</p>

						<h5 className="mt-5">Privacy Notice Explained</h5>
						<p className="text-justify">
							Welcome to zDrop Bangladesh ltd. We have a tendency to respect your privacy and wish to
							protect your personal data. This Privacy Policy interpret however we have an aptitude to
							gather, exercise and (under certain conditions) reveal your individual data. This Privacy
							Policy additionally explains the steps we've taken to secure your personal data, your
							choices relating to the gathering, use, and speech act by visiting the website directly or
							by different site, you settle for the culture illustrated during this Policy. This notice
							attaches to all information gathered or presented on this website.
						</p>

						<h5 className="mt-5">What Information We Collect</h5>
						<p className="text-justify">
							We gather the following categories of intelligence in mandate to provide products and
							services to you, to communicate with you, to improve our products, services and operations,
							and for other operational, legal and consent intend:
						</p>
						<ul>
							<li>
								<span className="font-weight-bold">Identification information</span> that performs
								applied to identify you, such as your name, alias, address, phone number, email address,
								payment information, signatures or various identifiers. We may moreover gather online
								identifiers, such as your IP address, when you browse our websites or conduct our
								applications. We may gather government-emerged ID for particular types of exploit - but
								please provide government-emerged ID information merely if we seek you to.
							</li>
							<li>
								<span className="font-weight-bold">Online activities information,</span> such as
								browsing story, search story and various information when you interlude across our
								websites, applications and advertisements
							</li>
							<li>
								<span className="font-weight-bold">Education information,</span> such as when you appeal
								for a job with us or rejoin to a purchaser observation
							</li>
							<li>
								<span className="font-weight-bold">Protected class information,</span> such as age,
								gender and family condition
							</li>
							<li>
								<span className="font-weight-bold">Geolocation data,</span> together with proper
								geolocation data if you agree our application to gather it
							</li>
							<li>
								<span className="font-weight-bold">Audio, electronic or visual information,</span> such
								as audio or video recording when you call us or when you come to our stores, although
								please remark we may not be capable to cooperate such recordings with you
							</li>
							<li>
								<span className="font-weight-bold">
									Professional or employment-related information,
								</span>{' '}
								such as when you provide us the intelligence in a metering
							</li>
							<li>
								<span className="font-weight-bold">Inferences or preferences</span> we experience or
								infer as regards you
							</li>
							<li>
								<span className="font-weight-bold">Commercial information,</span> such as products or
								services you buying or reputed buying
							</li>
							<li>
								<span className="font-weight-bold">Other personal information,</span> if it identifies,
								anticipates and can be logically associated with or connected to you (or your household)
							</li>
						</ul>

						<p className="text-justify">
							We do not rationally gather or reveal personal information from children under the age of 18
							except parental or guardian termination. If a child under the age of 18 has provided us with
							individually recognizable information, we ask that a parent or guardian contact us so that
							the information can be removed.
						</p>

						<h5 className="mt-5">Direct Marketing and Behavioral Advertising</h5>
						<p className="text-justify">
							We may outright dispatch you marketing communications and component by email, postal mail
							and other system to repose you informed of new products, promotions, and to provide other
							information we think may be of interest to you.
						</p>

						<h5 className="mt-5">What Are the Sources of Your Information</h5>
						<p className="text-justify">
							We gather various types of information respecting you from a number of sources, including
							information you provide to us, information we automatically gather, information we acquire
							from other sources and information we execute or infer about you.
						</p>

						<h5 className="mt-5">Enhance Our Products, Services and Operations</h5>
						<p className="mt-5">
							We may us <span className="font-weight-bold">all grade of information</span> we gather
							listed atop to improve our products, services and operations:
						</p>
						<ul>
							<li>
								Conduct assay and inward analytics, develop new products and services, carry through
								market research and data analytics, and analyze our products, services, websites and
								applications
							</li>
							<li>
								Administering our websites and applications, and execute accounting, auditing, billing,
								reconciliation and collection actions
							</li>
							<li>Ordain and conduct the effectiveness of our advertising and marketing</li>
							<li>
								Customize your knowledge in our stores and online, including customized advertisements
								and offers
							</li>
						</ul>

						<h5 className="mt-5">Links to Other Websites</h5>
						<p className="text-justify">
							Our websites may connect to various websites for your advantage and information. For
							instance, they may connect to websites of product suppliers, manufacturers and service
							providers. We are not liable for the content or privacy culture of any website that we do
							not governess and that does not point to this Privacy Statement.
						</p>

						<h5 className="mt-5">Updates</h5>
						<p className="text-justify">
							This Privacy representation may be updated etesian and except prior notice to you to gleam
							switch in our information culture or topical laws. We will post a circular on zDrop
							Bangladesh ltd. and other websites that clause to this Privacy assertion to instruct you of
							any tangible changes to the way we gather and exercise information. We will imply at the top
							of the Privacy assertion when it was last updated
						</p>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};

interface PropsType {
	isMobile?: boolean;
}
