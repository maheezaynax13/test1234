import { IFAQs } from '@libs/api/interfaces';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FaqAnswers, FaqNavbar } from '.';

export const Faqs: FC<PropsType> = ({ data, isMobile = false }) => {
	const [navItems, setNavItems] = useState<string[]>(null);
	const [activeData, setActiveData] = useState<IFAQs['contents'][0]>(null);
	console.log(navItems);
	console.log(data);

	useEffect(() => {
		if (data && Object.keys(data).length > 0) {
			if (data.contents && data.contents.length > 0) {
				setNavItems(data.contents.map((el) => el.questionTypeName));
				setActiveData(data.contents[0]);
			}
		}
	}, [data]);

	const handleFindTopics = (tag: string) => {
		data.contents.forEach((el) => {
			if (el.questionTypeName === tag) setActiveData(el);
		});
	};

	return (
		<FaqsWrapper>
			<h5
				className="secondary-font text-center mb-4 w-100"
				style={{ fontSize: `${isMobile ? '2rem' : '2.5rem'}` }}
			>
				Frequently Asked Questions
			</h5>

			<Row>
				<Col md={3}>
					<FaqNavbar
						data={navItems}
						isActive={activeData?.questionTypeName}
						clickHandler={handleFindTopics}
					/>
				</Col>
				<Col md={9}>
					<FaqAnswers data={activeData} />
				</Col>
			</Row>
		</FaqsWrapper>
	);
};

interface PropsType {
	data: IFAQs;
	isMobile?: boolean;
}

const FaqsWrapper = styled.div`
	padding: 15px 0;
`;
