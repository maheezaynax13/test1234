import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '@components/atoms';
import { ElementSize } from '@components/atoms/interfaces';

export const HeadingWithIcon: FC<HeadingWithIconProps> = ({ size, className, style, label, ...rest }) => {
	const headerProps = { size, className, style };

	return (
		<Header {...headerProps}>
			<Image {...rest} /> {label}
		</Header>
	);
};

export interface HeadingWithIconProps extends ImageProps {
	label: ReactNode;
	size?: Extract<ElementSize, 'sm'>;
}

const Header = styled.h3``;
