import { LowerHeader, MainFooter, MainHeader, TrackOrderPopup } from '@components/organisms';
import { FC, Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IDefaultProps } from '../interfaces';
import { HandheldMainLayout } from '../MainLayout/Handheld';
import { MemberNavbar } from './MemberNavbar';

export const MemberLayout: FC<IDefaultProps> = ({ isMobile, children }) => {
	const [showTrackForm, setTrackForm] = useState<boolean>(false);

	if (isMobile) return <HandheldMainLayout>{children}</HandheldMainLayout>;

	return (
		<Fragment>
			<MainHeader />
			<TrackOrderPopup isActive={showTrackForm} onHide={() => setTrackForm(false)} />
			<LowerHeader setTrackForm={() => setTrackForm(true)} />
			<Main>
				<Container>
					<Row>
						<Col xs={12} sm={3} md={3} lg={2}>
							<MemberNavbar />
						</Col>
						<Col xs={12} sm={9} md={9} lg={10}>
							{children}
						</Col>
					</Row>
				</Container>
			</Main>
			<MainFooter />
		</Fragment>
	);
};

const Main = styled.main`
	width: 100%;
	padding-bottom: 5rem;
	display: block;
`;
