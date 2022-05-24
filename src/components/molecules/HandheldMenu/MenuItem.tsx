import { Image, ImageProps, Link as NavLink, LinkProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

export const MenuItem: FC<MenuItemProps> = (props) => {
	const { title, path, width, height, fill, isImage, fluid, src, alt, children, ...rest } = props;
	const iconProps = { path, width, height, fill };
	const imageProps = { fluid, src, alt };

	return (
		<Link {...rest}>
			{children && children}
			{(isImage || !!path) && (!isImage && path ? <Icon {...iconProps} /> : <Image {...imageProps} />)}
			{title}
		</Link>
	);
};

interface MenuItemProps
	extends LinkProps,
		Pick<IconProps, 'width' | 'height' | 'fill'>,
		Pick<ImageProps, 'fluid' | 'src' | 'alt'> {
	path?: string;
	title: string;
	isImage?: boolean;
}

MenuItem.defaultProps = {
	width: 18,
	height: 18,
	fill: 'var(--dark)',
	isImage: false,
};

const Link = styled(NavLink)`
	width: 100%;
	margin-bottom: 0.625rem;
	display: flex;
	align-items: center;

	&:last-child {
		margin-bottom: 0;
	}

	svg,
	img {
		margin-right: 0.5rem;
	}
`;
