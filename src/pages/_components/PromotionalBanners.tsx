import { Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { IImage } from '@modules/interfaces/homepage';

const PromotionalBanners = ({ data }: propsType): JSX.Element => {
	if (data && data.length > 0) {
		return (
			<BannerItems>
				<Row>
					{data.map((el, i) => (
						<Col key={i} md={4}>
							<div className="d-block">
								<Link href={el.link}>
									<a>
										<Image fluid src={el.image} alt={el.alt} />
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

export default PromotionalBanners;

interface propsType {
	data: IImage[];
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
