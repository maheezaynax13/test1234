import { Faqs, HHelpMenu, Item } from '@components/organisms';
import { IFAQs } from '@libs/api/interfaces';
import { helpCenterMobileData } from '@utils/constants';
import { FC, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Help: FC<PropsType> = ({ data }) => {
	return (
		<Fragment>
			<HHelpMenu />
			<Container>
				<Row style={{ margin: '0.5rem 0.15rem' }}>
					<Col>
						<Row>
							{helpCenterMobileData.map((el, i) => (
								<Col key={i} xs={6} lg={6}>
									<Wrapper>
										<Item {...el} />
									</Wrapper>
								</Col>
							))}
						</Row>

						<Faqs isMobile data={data} />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

interface PropsType {
	data: IFAQs;
}

const Wrapper = styled.div`
	a > div {
		border: none;
		box-shadow: 0 0 8px #8a8a8a1a;

		h5 {
			color: black !important;
			font-size: 0.875rem;
			font-weight: 600;
			margin: 0.5rem 0;
		}
		p {
			color: #b5b5b5 !important;
			font-size: 0.75rem;
			margin-bottom: 0.25rem;
		}
	}
`;
