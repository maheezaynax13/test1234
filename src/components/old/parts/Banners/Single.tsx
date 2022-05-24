import { HomePageImageEntity } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import { CSSProperties } from 'styled-components';

const BannerSingle = ({ altText, style, className, imageURL, slug }: propsType): JSX.Element => (
	<Link href={`/${slug}`}>
		<a className={`d-block ${className}`} style={style}>
			<Image fluid src={imageURL} alt={altText} style={{ borderRadius: '10px' }} />
		</a>
	</Link>
);

export default BannerSingle;

interface propsType extends HomePageImageEntity {
	style?: CSSProperties;
	className?: string;
}
