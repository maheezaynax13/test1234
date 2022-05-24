import { Image, ImageProps, Link, LinkProps } from '@components/atoms';
import { FC } from 'react';
import styled from 'styled-components';

export const FullWidthBanner: FC<FullWidthBannerProps> = ({ href, ...rest }) => {
	if (href) {
		return (
			<Link href={href}>
				<BannerImage {...rest} />
			</Link>
		);
	}

	return <BannerImage {...rest} />;
};

export type FullWidthBannerProps = Partial<Pick<LinkProps, 'href'>> & ImageProps;

const BannerImage = styled(Image)`
	width: 100%;
	height: auto;
	margin-bottom: 1rem;
`;
