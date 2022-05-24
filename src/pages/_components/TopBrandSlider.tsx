import { CSSProperties, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import Slider from 'react-slick';
import { ITopBrand, IBrandCategory, IBrandImage } from '@modules/interfaces/homepage';
import styled from 'styled-components';

const TopBrandSlider = ({ data }: propsType): JSX.Element => {
	const [brands, setBrands] = useState<IBrandCategory[]>([]);
	const [items, setItems] = useState<IBrandImage[]>([]);
	const [selected, setSelected] = useState<string>('All Brands');

	useEffect(() => {
		if (data && Object.keys(data).length > 0) {
			const { data: { brandCategory, brandImages } = { brandCategory: [], brandImages: [] } } = data;
			if (brandCategory.length > 0) setBrands(brandCategory);
			if (brandImages.length > 0) setItems(brandImages);
		}
	}, [data]);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
		],
	};

	const handleBrand = (PID: number, title: string) => {
		if (data && Object.keys(data).length > 0) {
			const { data: { brandImages } = { brandImages: [] } } = data;

			if (title === 'All Brands') {
				setItems(brandImages);
			} else {
				const filtered = brandImages.filter((e) => e.pid === PID);
				if (filtered && filtered.length > 0) setItems(filtered);
			}
			setSelected(title);
		}
	};

	if (brands.length > 0 && items.length > 0) {
		return (
			<BrandContainer>
				<Heading>{data?.header}</Heading>
				<SubHeading>{data?.subHeader}</SubHeading>
				<BrandWrap>
					<BrandList>
						<li>
							<Button
								variant="link"
								active={!!(selected === 'All Brands')}
								onClick={() => handleBrand(0, 'All Brands')}
							>
								All Brands
							</Button>
						</li>
						{brands.map(({ Title, PID }, i) => (
							<li key={i}>
								<Button
									variant="link"
									active={!!(selected === Title)}
									onClick={() => handleBrand(PID, Title)}
								>
									{Title}
								</Button>
							</li>
						))}
					</BrandList>
					<SliderItems className="brandSlider">
						<Slider {...settings}>
							{items.map(({ title, image, items }, i) => (
								<div key={i} className="TopBrands-Slider__Item">
									<Link href={`/search?q=${title.toLowerCase()}`}>
										<a style={brandItemStyle}>
											<Image fluid src={image} alt={title} className="mx-auto" />
											<p className="mt-3 mb-3">{items} Items</p>
										</a>
									</Link>
								</div>
							))}
						</Slider>
					</SliderItems>
				</BrandWrap>
			</BrandContainer>
		);
	}

	return null;
};

export default TopBrandSlider;

interface propsType {
	data: ITopBrand;
	colSize?: number;
	isLoading?: boolean;
}

const brandItemStyle: CSSProperties = {
	minHeight: '80px',
	display: 'block',
	color: '#515151',
	textAlign: 'center',
	padding: '15px',
	margin: '0 7.5px',
	backgroundColor: '#fff',
	borderRadius: '10px',
	textDecoration: 'none',
};

const BrandContainer = styled.div`
	width: 100%;
	display: inline-block;
	margin-top: 25px;
`;

const Heading = styled.h1`
	color: var(--dark);
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
`;

const SubHeading = styled.p`
	color: var(--dark);
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
`;

const BrandList = styled.ul`
	margin: 0 0 20px;
	padding: 0;
	text-align: center;

	li {
		list-style: none;
		display: inline-block;

		button {
			color: #515151;
			padding: 5px 20px 7px;
			text-align: center;
			border-radius: 20px;

			&.active {
				color: var(--white);
				font-weight: 500;
				background-color: var(--primary);
				box-shadow: 0 0 6px #ececec;
			}

			&:hover,
			&:focus {
				text-decoration: none;
			}
		}
	}
`;

const BrandWrap = styled.div`
	position: relative;
	margin-top: 20px;
`;

const SliderItems = styled.div`
	margin: 0 -7.5px;
`;
