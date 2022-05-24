import { CardWithShadow } from '@components/old/UI';
import { ImageWithHeader } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import BlockHeader from './BlockHeader';

const BannerSlider = ({ data, colSize = 3 }: propsType): JSX.Element => {
	const settings = {
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: colSize,
		slidesToScroll: colSize,
	};

	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		return (
			<CardWithShadow className="productSlider" style={{ marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col xs={12}>
						<Slider {...settings}>
							{items.map(({ altText, imageURL, slug }, i) => (
								<div key={i} className="pl-1 pr-1">
									<Link href={slug}>
										<a>
											<Image
												fluid
												src={imageURL}
												alt={altText}
												className="mx-auto"
												style={{ borderRadius: '10px' }}
											/>
										</a>
									</Link>
								</div>
							))}
						</Slider>
					</Col>
				</Row>
			</CardWithShadow>
		);
	}

	return null;
};

export default BannerSlider;

interface propsType {
	data: ImageWithHeader;
	colSize?: number;
	isLoading?: boolean;
}
