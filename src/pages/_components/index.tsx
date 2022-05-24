/* eslint-disable indent */
import { BlogSlider, PaginateProductList } from '@components/organisms';
import { HomePageEntity, homepageTypeHelper, IHomepageBlogs, ItemTypeEnum } from '@modules/api/cms/interfaces';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AsideProductList from './AsideProductList';
import BannerAds from './BannerAds';
import BannerSlider from './BannerSlider';
import CategoryHighlight from './CategoryHighlight';
import CategoryListing from './CategoryListing';
import Collections from './Collections';
import FeaturedBanners from './FeaturedBanners';
import MainSlider from './MainSlider';
import ProductList from './ProductList';
import ProductSlider from './ProductSlider';
import TopBrandList from './TopBrandList';
import TopStores from './TopStores';

const DesktopHomepage: FC<PropsType> = ({ data, blogs }) => {
	return (
		<Container>
			<Row>
				{data &&
					data.length > 0 &&
					data.map((item, key) => {
						switch (item.itemType) {
							case ItemTypeEnum.SLIDER:
								return (
									<Col md={12} key={key}>
										<MainSlider
											data={homepageTypeHelper(ItemTypeEnum.SLIDER, item).item}
											style={{ marginBottom: '-0.875rem' }}
										/>
									</Col>
								);
							case ItemTypeEnum.THREE_ITEMS_THUMBNAILS:
								return (
									<Col md={12} key={key}>
										<FeaturedBanners
											data={homepageTypeHelper(ItemTypeEnum.THREE_ITEMS_THUMBNAILS, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.FULL_WIDTH_PRODUCTS:
								return (
									<Col md={12} key={key}>
										<ProductSlider
											data={homepageTypeHelper(ItemTypeEnum.FULL_WIDTH_PRODUCTS, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.HALF_WIDTH_PRODUCTS:
								return (
									<Col md={6} key={key}>
										<ProductList
											data={homepageTypeHelper(ItemTypeEnum.HALF_WIDTH_PRODUCTS, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_COLLECTIONS:
								return (
									<Col md={12} key={key}>
										<Collections
											data={homepageTypeHelper(ItemTypeEnum.FEATURED_COLLECTIONS, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_STORES:
								return (
									<Col key={key} md={12}>
										<TopStores data={homepageTypeHelper(ItemTypeEnum.FEATURED_STORES, item).item} />
									</Col>
								);
							case ItemTypeEnum.THREE_ITEMS_THUMBNAILS_WITH_HEADER:
								return (
									<Col md={12} key={key}>
										<BannerSlider
											data={
												homepageTypeHelper(
													ItemTypeEnum.THREE_ITEMS_THUMBNAILS_WITH_HEADER,
													item,
												).item
											}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_PRODUCT_WITH_BANNER:
								return (
									<Col md={12} key={key}>
										<AsideProductList
											data={
												homepageTypeHelper(ItemTypeEnum.FEATURED_PRODUCT_WITH_BANNER, item).item
											}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_BRANDS:
								return (
									<Col md={12} key={key}>
										<TopBrandList
											data={homepageTypeHelper(ItemTypeEnum.FEATURED_BRANDS, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_CATEGORIES:
								return (
									<Col md={12} key={key}>
										<CategoryListing
											data={homepageTypeHelper(ItemTypeEnum.FEATURED_CATEGORIES, item).item}
										/>
									</Col>
								);
							case ItemTypeEnum.HALF_WIDTH_BANNERS:
								return (
									<Col md={12} key={key}>
										<BannerAds
											data={homepageTypeHelper(ItemTypeEnum.HALF_WIDTH_BANNERS, item).item}
											colSize={6}
										/>
									</Col>
								);
							case ItemTypeEnum.FEATURED_COLLECTION_WITH_BG_IMAGE:
								return (
									<Col md={12} key={key}>
										<CategoryHighlight
											data={
												homepageTypeHelper(ItemTypeEnum.FEATURED_COLLECTION_WITH_BG_IMAGE, item)
													.item
											}
										/>
									</Col>
								);
							case ItemTypeEnum.ONE_THIRD_FEATURED_PRODUCT:
								return (
									<Col md={4} key={key}>
										<ProductList
											colSize={2}
											data={
												homepageTypeHelper(ItemTypeEnum.ONE_THIRD_FEATURED_PRODUCT, item).item
											}
										/>
									</Col>
								);
							case ItemTypeEnum.ONE_QUARTER_THUMBNAILS_WITH_HEADER:
								return (
									<Col md={12} key={key}>
										<BannerSlider
											colSize={4}
											data={
												homepageTypeHelper(
													ItemTypeEnum.ONE_QUARTER_THUMBNAILS_WITH_HEADER,
													item,
												).item
											}
										/>
									</Col>
								);
							case ItemTypeEnum.FULL_WIDTH_BANNER:
								return (
									<Col md={12} key={key}>
										<MainSlider data={homepageTypeHelper(ItemTypeEnum.SLIDER, item).item} />
									</Col>
								);
							case ItemTypeEnum.RECOMMENDED_PRODUCTS:
								return (
									<Col md={12} key={key} style={{ marginBottom: '25px' }}>
										<PaginateProductList
											colSize={6}
											data={homepageTypeHelper(ItemTypeEnum.RECOMMENDED_PRODUCTS, item).item}
										/>
									</Col>
								);
						}
					})}

				<Col xs={12} md={12}>
					<BlogSlider data={blogs} />
				</Col>
			</Row>
		</Container>
	);
};

export default DesktopHomepage;

interface PropsType {
	data: HomePageEntity<ItemTypeEnum>[];
	blogs?: IHomepageBlogs[];
}
