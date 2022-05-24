import { AuthPopup } from '@components/old/parts/Auth';
import {
	HProductAddedCart,
	HProductAttributes,
	HProductInfo,
	HProductRelatedItems,
	HProductSlider,
	HProductSpecs,
	ProductDeliveryOptions,
	ProductSellerInfo,
	ProductWarranty,
} from '@components/organisms';
import { ISingleProduct } from '@libs/api/interfaces';
import { useProduct } from '@libs/hooks';
import { FC, Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const SingleProduct: FC<Omit<ISingleProduct, 'metaTags'>> = (props) => {
	const [isPropupModal, setPopupModal] = useState<boolean>(false);

	const {
		id,
		productID,
		name,
		images,
		mainImage,
		brand,
		origin,
		productReview,
		orderCount,
		attributes,
		stock,
		seller,
		policies,
		specification,
		longDescription,
	} = props;
	const { isWishlist, handleWishlist, handleAddToCart, recommended } = useProduct(id);
	const sliderProps = { name, images, mainImage };
	const infoProps = {
		id,
		name,
		brand,
		origin,
		productReview,
		orderCount,
		isActive: isWishlist,
		onClick: handleWishlist,
	};
	const attrsProps = {
		mainImage,
		attributes,
		stock,
		handleWishlist,
		handleAddToCart,
		isWishlist,
		setPopupModal,
	};
	const specProps = {
		name,
		specification,
		longDescription,
	};

	return (
		<Fragment>
			<HProductSlider {...sliderProps} />
			<Container>
				<Row>
					<Col>
						<HProductInfo {...infoProps} />
						<HProductAttributes {...attrsProps} />
						<ProductSellerInfo {...seller} />
						<ProductDeliveryOptions productID={productID} />
						<ProductWarranty {...policies} />
						<HProductSpecs {...specProps} />
						<HProductRelatedItems items={recommended} />
						<HProductAddedCart isActive={isPropupModal} onHide={() => setPopupModal(false)} />
						<AuthPopup />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};
