import { CardWithBorder } from '@components/old/UI';
import { Reviews } from '@components/organisms';
import { ISingleProduct } from '@libs/api/interfaces';
import { FAQItems } from '@utils/constants';
import { FC } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';
import Descriptions from './Descriptions';
import FAQs from './FAQs';
import Specifications from './Specifications';

const MoreDetails: FC<PropsType> = (props) => {
	const { name, stock, productID, mainImage, specification, longDescription } = props;
	const reviewProps = {
		name,
		productID,
		skuID: stock.variants[0].skuID,
		imageURL: mainImage.medium,
	};
	const activeKey = longDescription
		? 'descriptions'
		: specification && specification.length > 0
		? 'specifications'
		: 'reviews';

	return (
		<CardWithBorder className="mb-4 pt-0">
			<TabList defaultActiveKey={activeKey} id="productSpecifications">
				{longDescription && (
					<Tab eventKey="descriptions" title="DESCRIPTIONS">
						<Descriptions data={longDescription} />
					</Tab>
				)}

				{specification && specification.length > 0 && (
					<Tab eventKey="specifications" title="SPECIFICATIONS">
						<Specifications data={specification} />
					</Tab>
				)}

				<Tab eventKey="reviews" title="REVIEWS">
					<Reviews {...reviewProps} />
				</Tab>

				{FAQItems && FAQItems.length > 0 && (
					<Tab eventKey="faqs" title="FAQ's">
						<FAQs data={FAQItems} />
					</Tab>
				)}

				{/* <Tab eventKey="wholesaleInquiry" title="WHOLESALE INQUIRY">
					<InquiryForm productName={name} />
				</Tab> */}
			</TabList>
		</CardWithBorder>
	);
};

export default MoreDetails;

type PropsType = Pick<
	ISingleProduct,
	'name' | 'specification' | 'longDescription' | 'productID' | 'mainImage' | 'stock'
>;

const TabList = styled(Tabs)`
	.nav-item {
		color: #515151;
		font-weight: 500;

		&:hover {
			border-top-color: transparent;
			border-left-color: transparent;
			border-right-color: transparent;
		}
		&.active {
			color: var(--primary);
			margin-bottom: 0;
			border-top-color: transparent;
			border-left-color: transparent;
			border-right-color: transparent;
			background-color: transparent;
			position: relative;

			&:after {
				position: absolute;
				content: '';
				width: 100%;
				height: 4px;
				left: 0;
				bottom: -1px;
				background-color: var(--primary);
				border-top-left-radius: 0.625rem;
				border-top-right-radius: 0.625rem;
			}
		}
	}
	& ~ .tab-content {
		padding: 16px;
	}
`;
