/* eslint-disable indent */
import {
	BlogSlider,
	Collections,
	FullWidthSlider,
	HorizontalNavbar,
	PopularCategories,
	TernaryProducts,
	TopStores,
} from '@components/organisms';
import { IHHomepage } from '@libs/api/interfaces';
import { IHomepageBlogs } from '@modules/api/cms/interfaces';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Homepage: FC<PropsType> = ({ data, blogs }) => {
	return (
		<Container>
			<Row>
				<Col>
					{data?.map((e, i) => {
						switch (e.itemType) {
							case 'SLIDER':
								return <FullWidthSlider key={i} data={e.item} />;

							case 'MOBILE_CATEGORIES':
								return <HorizontalNavbar key={i} data={e.item} />;

							case 'MOBILE_POPULAR_CATEGORIES':
								return <PopularCategories key={i} {...e.item} />;

							case 'FEATURED_COLLECTIONS':
								return <Collections key={i} {...e.item} />;

							case 'FEATURED_STORES':
								return <TopStores key={i} {...e.item} />;

							case 'FULL_WIDTH_PRODUCTS':
								return <TernaryProducts key={i} {...e.item} />;

							case 'HALF_WIDTH_PRODUCTS':
								return <TernaryProducts key={i} xs={3} {...e.item} />;

							case 'RECOMMENDED_PRODUCTS':
								return <TernaryProducts isSold key={i} xs={6} {...e.item} />;
						}
					})}
				</Col>

				<Col xs={12} sm={12}>
					<BlogSlider data={blogs} />
				</Col>
			</Row>

			{/* <Row>
				<Col>
					<BlogSlider data={blogs} />
				</Col>
			</Row> */}
		</Container>
	);
};

type PropsType = {
	data: IHHomepage[];
	blogs?: IHomepageBlogs[];
};
