import { Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import { IBanner } from '@modules/interfaces/brands';

const TopBanners = ({ data }: propsType): JSX.Element => {
	if (data && data.length > 0) {
		return (
			<Row>
				{data.map((el, i) => (
					<Col key={i} md={4}>
						<div className="d-block">
							<Link href={`/${el.link}`}>
								<a>
									<Image fluid src={el.imageUrl} alt={el.alt} />
								</a>
							</Link>
						</div>
					</Col>
				))}
			</Row>
		);
	}

	return null;
};

export default TopBanners;

interface propsType {
	data: IBanner[];
}
