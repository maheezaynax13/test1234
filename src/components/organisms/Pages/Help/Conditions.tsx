import { helpCenterData } from '@utils/constants';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Item } from './Item';

export const Conditions: FC = () => {
	return (
		<QuestionsWrapper>
			<h1 className="Item-Header secondary-font">Welcome to the Help Center</h1>
			<p className="text-secondary text-center">How can we help you, today?</p>

			<Row>
				{helpCenterData.map((el, i) => (
					<Col key={i} md={4}>
						<Item {...el} />
					</Col>
				))}
			</Row>
		</QuestionsWrapper>
	);
};

const QuestionsWrapper = styled.div`
	padding: 15px 0;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 130px;
		width: 153px;
		height: 130px;
		background-size: cover;
		background: url('/images/haha.svg') no-repeat;
		z-index: 9;
	}

	.Item {
		&-Header {
			width: 100%;
			text-align: center;
			font-size: 40px;
		}

		&-List {
			&__Image {
				width: 100%;
				min-height: 46px;
				margin: 10px 0;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;
