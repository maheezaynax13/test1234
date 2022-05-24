import { HomePageImageEntity } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

const FeaturedBanners = ({ data, ...rest }: propsType): JSX.Element => {
	if (data && data.length > 0) {
		return (
			<BannerItems {...rest}>
				<Row>
					{data.map((el, i) => (
						<Col key={i} md={4}>
							<div className="d-block">
								<Link href={el?.slug || '/'}>
									<a>
										<Image fluid src={el.imageURL} alt={el.altText} />
									</a>
								</Link>
							</div>
						</Col>
					))}
				</Row>
			</BannerItems>
		);
	}

	return null;
};

export default FeaturedBanners;

interface propsType extends HTMLAttributes<HTMLDivElement> {
	data: HomePageImageEntity[];
	isLoading?: boolean;
}

const BannerItems = styled.div`
	margin-top: 25px;

	a {
		img {
			border-radius: 10px;
		}
	}
`;

