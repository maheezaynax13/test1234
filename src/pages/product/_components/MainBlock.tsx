import { Breadcrumbs } from '@components/atoms';
import {
	ManageQuantity,
	ProductAttributes,
	ProductDeliveryOptions,
	ProductSellerInfo,
	ProductWarranty,
} from '@components/organisms';
import { ShippedBy } from '@components/organisms/Pages/Product/ShippedBy';
import { ISingleProduct, ISingleProductImage } from '@libs/api/interfaces';
import { getProductState } from '@store/actions';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ButtonGroup from './ButtonGroup';
import ImageGallery from './ImageGallery';
import Information from './Information';

const MainBlock: FC<PropsType> = (props) => {
	const [previewData, setPreviewData] = useState<ISingleProductImage[]>([]);
	const [activeImageUrl, setActiveImageUrl] = useState<ISingleProductImage>(null);
	const [isImageLoading, setImageLoading] = useState<boolean>(true);
	const { quantity, stock: itemStock } = useSelector(getProductState);
	const {
		breadcrumbs,
		id,
		productID,
		name,
		brand,
		images,
		mainImage,
		productReview,
		orderCount,
		attributes,
		shippingInfo,
		stock,
		seller,
		policies,
		videoURL,
	} = props;
	const infoProps = {
		name,
		brand,
		productReview,
		orderCount,
	};
	const attrsProps = {
		attributes,
		stock,
	};
	const qtyProps = {
		isStock: true,
		quantity,
		stock: itemStock,
	};

	useEffect(() => {
		setPreviewData((prevState) => {
			const newImages = images.map((el) => ({ ...el, isVideo: false }));
			const cloned = JSON.parse(JSON.stringify(prevState));
			if (videoURL) {
				const newArr = [...newImages, { isVideo: true, big: videoURL, medium: videoURL, small: videoURL }];
				return newArr;
			}
			return newImages;
		});
	}, []);

	useEffect(() => {
		setActiveImageUrl(null);
		setImageLoading(null);
	}, [props]);

	useEffect(() => {
		if (mainImage && Object.keys(mainImage).length > 0) setActiveImageUrl(mainImage);
	}, [mainImage]);

	const handleUpdateImage = (el: ISingleProductImage) => {
		setImageLoading(activeImageUrl.big !== el.big);
		setActiveImageUrl(el);
	};

	return (
		<div className="pb-3">
			<Breadcrumbs
				data={breadcrumbs?.map(({ category, slug }) => ({ href: `/category/${slug}`, title: category }))}
			/>
			<Row>
				<Col md={5}>
					<ImageGallery
						data={previewData}
						isLoading={isImageLoading}
						activeItem={activeImageUrl}
						updateHandler={handleUpdateImage}
						disableLoader={() => setImageLoading(false)}
					/>
				</Col>
				<Col md={7}>
					<div className="d-block ml-2">
						<Information {...infoProps} />
						<ProductAttributes {...attrsProps} clickHandler={handleUpdateImage} />
						<ManageQuantity {...qtyProps} />
						<ButtonGroup id={id} />
						<ProductSellerInfo {...seller} />
						<ProductDeliveryOptions productID={productID} />
						<ProductWarranty {...policies} />
						<ShippedBy {...shippingInfo} />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MainBlock;

type PropsType = Omit<ISingleProduct, 'metaTags' | 'specification' | 'longDescription'>;
