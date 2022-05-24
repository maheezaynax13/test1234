import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Image as Img, ImageProps } from '@components/atoms';

export const Brand: FC<BrandProps> = ({ isClickable, ...rest }) => {
	if (isClickable) {
		return (
			<Link href="/">
				<a>
					<Image src="/logo.svg" {...rest} />
				</a>
			</Link>
		);
	}

	return <Image src="/logo.svg" {...rest} />;
};

export interface BrandProps extends Omit<ImageProps, 'src' | 'fluid'> {
	isClickable?: boolean;
}

Brand.defaultProps = {
	isClickable: false,
};

export const Image = styled(Img)`
	display: inline-block;
	margin: 0 auto;
`;
