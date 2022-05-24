import { Image } from 'react-bootstrap';
import Link from 'next/link';

const Banner = ({ imageUrl, altText, link, children }: IBanner): JSX.Element => {
	if (link && imageUrl) {
		return (
			<div className="w-100 position-relative">
				<Link href={`/${link}`}>
					<a className="d-block">
						<Image fluid src={imageUrl} alt={altText} />
					</a>
				</Link>
				{children}
			</div>
		);
	} else if (imageUrl) {
		return (
			<div className="w-100 position-relative">
				<Image fluid src={imageUrl} alt={altText} />
			</div>
		);
	}

	return null;
};

export default Banner;

export interface IBanner {
	imageUrl: string;
	altText?: string;
	link?: string;
	children?: JSX.Element | JSX.Element[];
}
