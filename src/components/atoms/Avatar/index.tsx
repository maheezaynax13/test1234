import { FC, ImgHTMLAttributes } from 'react';
import { ElementSize } from '../interfaces';
import { AvatarWrapper } from './styles';

export const Avatar: FC<AvatarProps> = ({ src, ...rest }) => (
	<AvatarWrapper src={src?.length > 0 ? src : '/images/avatar.jpg'} {...rest} />
);

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	size?: ElementSize | 'xs';
}

Avatar.defaultProps = {
	size: 'md',
	src: '/images/avatar.jpg',
};
