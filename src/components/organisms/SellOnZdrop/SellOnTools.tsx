import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Description } from './Common/Description';
import { Title } from './Common/Title';
import { toolsData } from './constants';

export const SellOnTools: FC = () => {
	return (
		<ToolsBox className="px-3 px-sm-5 my-5">
			<Title className="title my-4 font-weight-normal" variant="black">
				Powerful Tools To Grow Your Business
			</Title>
			<Row>
				{toolsData?.map((data) => {
					return (
						<Col lg={4}>
							<div className="py-2 py-lg-4 tools-box px-5 ">
								<Title className="mb-2 text-left md-title" variant="black" size="md">
									{data.title}
								</Title>
								<Description className="description mb-3 text-sm-left">{data.description}</Description>
							</div>
						</Col>
					);
				})}
			</Row>
		</ToolsBox>
	);
};

const ToolsBox = styled.div`
	@media only screen and (max-width: 425px) {
		.tools-box {
			padding: 0px !important;
		}
	}
`;
