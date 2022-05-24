import { CardWithShadow } from '@components/old/UI';
import { IHomepageBlogs } from '@modules/api/cms/interfaces';
import { getAppState } from '@store/actions';
import { FC, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Blog } from './Blog';

export const BlogSlider: FC<PropsType> = ({ data }) => {
	const { isMobile } = useSelector(getAppState);
	const settings = {
		dots: true,
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	if (data) {
		return (
			<Card isMobile={isMobile} className="homepageBlogSlider">
				<Row>
					<Col xs={12} className="text-center">
						{isMobile ? (
							<span className="font-weight-semibold text-uppercase ml-1">Latest Blogs</span>
						) : (
							<Fragment>
								<h4 className="font-weight-semibold text-uppercase">Latest Blogs</h4>
								<h5 className="text-center m-auto pb-3" style={{ maxWidth: '45%' }}>
									This is a place devoted to giving you deeper insight into the news, trends, people
									and technology behind Bing.
								</h5>
							</Fragment>
						)}
					</Col>
					<Col xs={12}>
						<Slider {...settings}>
							{data.map((el, i) => (
								<Blog key={i} {...el} />
							))}
						</Slider>
					</Col>
				</Row>
			</Card>
		);
	}

	return null;
};

interface PropsType {
	data: IHomepageBlogs[];
}

const Card = styled(CardWithShadow)<{ isMobile: boolean }>`
	border: 0;
	margin: ${({ isMobile }) => (isMobile ? '0' : '3.5rem 0')};
	padding: ${({ isMobile }) => (isMobile ? '0 0.25rem' : '0 4rem')};
	box-shadow: none;
	background-color: transparent;
`;
