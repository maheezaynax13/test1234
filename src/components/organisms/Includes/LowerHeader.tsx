import { Dropdown as coreDropdown, Image, Link } from '@components/atoms';
import { getAppState } from '@store/actions';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const LowerHeader: FC<PropsType> = ({ setTrackForm }) => {
	const { dealLinks } = useSelector(getAppState);

	return (
		<Wrapper>
			<Container>
				<Row>
					<Col lg={2} xl={3}>
						<button className="bg-transparent border-0 p-0 m-0" onClick={setTrackForm}>
							<div className="d-flex align-items-center">
								<Image src="/images/icons/track-order.png" className="mr-1" />
								Track Order
							</div>
						</button>
					</Col>
					<Col>
						<div className="d-flex justify-content-between">
							{dealLinks?.map(({ title, iconURL, link }, i) => (
								<Link key={i} variant="dark" href={link}>
									<div className="d-flex align-items-center">
										<Image src={iconURL} className="mr-1" />
										{title}
									</div>
								</Link>
							))}
						</div>
					</Col>
					<Col md={{ span: '4', offset: '1' }}>
						<div className="d-flex justify-content-between">
							<div className="d-flex">
								<BadgeLink href="https://blog.zdrop.com.bd">Blog</BadgeLink>
								<Link variant="dark" href="/sell-on-zdrop">
									<div className="d-flex align-items-center">
										<Image src="/images/icons/sell-zdrop.png" className="mr-1" />
										Sell on zDrop
									</div>
								</Link>
							</div>
							{/* <Dropdown
								variant="link"
								className="text-dark p-0 border-0"
								buttonLabel={
									<div className="d-flex align-items-center">
										<Image src="/images/icons/download-app.png" className="mr-1" />
										Download App
									</div>
								}
								alignRight
							></Dropdown> */}

							<Link variant="dark" href="https://play.google.com/store/apps/details?id=com.zdrop.bd">
								<div className="d-flex align-items-center">
									<Image src="/images/icons/download-app.png" className="mr-1" />
									Download App
								</div>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	);
};

interface PropsType {
	setTrackForm?: () => void;
}

const Wrapper = styled.div`
	padding: 0.625rem 0;
	margin-bottom: 0.75rem;
	border-bottom: 1px solid var(--border);
	background-color: var(--white);
`;

const Dropdown = styled(coreDropdown)`
	& ~ .DropdownList {
		top: 2.2rem;
	}
`;

const BadgeLink = styled(Link)`
	padding: 0 0.625rem;
	margin-right: 1rem;
	border-radius: 50rem;
	background-color: #d6ffea;

	&:hover {
		color: var(--primary);
	}
`;
