import { Image, Link } from '@components/atoms';
import { FC } from 'react';
import styled from 'styled-components';
import { HandheldScroller } from './HandheldScroller';

export const HorizontalNavbar: FC<HorizontalNavbarProps> = ({ data }) => {
	if (data?.length > 0) {
		return (
			<HandheldScroller>
				{data.map(({ title, slug, imageURL, altText }, i) => {
					if (title === 'All Categories') {
						return (
							<Link
								key={i}
								href={'/categories'}
								style={{ minWidth: '3.3rem' }}
								className="text-dark text-decoration-none text-align-center"
							>
								<ImageWrapper fluid src={imageURL} alt={altText} />
								<p className="mb-0 text-center" style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>
									{title}
								</p>
							</Link>
						);
					} else {
						return (
							<Link
								key={i}
								href={slug}
								style={{ minWidth: '3.3rem' }}
								className="text-dark text-decoration-none text-align-center"
							>
								<ImageWrapper fluid src={imageURL} alt={altText} />
								<p className="mb-0 text-center" style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>
									{title}
								</p>
							</Link>
						);
					}
				})}
			</HandheldScroller>
		);
	}

	return null;
};

type Item = {
	title: string;
	altText: string;
	imageURL: string;
	slug: string;
};

type HorizontalNavbarProps = {
	data: Item[];
};

const ImageWrapper = styled(Image)`
	@media (max-width: 525px) {
		height: 60px;
		width: 60px !important;
	}

	@media (max-width: 425px) {
		height: 55px;
		width: 55px;
	}
`;
