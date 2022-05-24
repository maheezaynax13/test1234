import styled from 'styled-components';

const Avatar = ({ src, size = 'md', ...rest }: propsType): JSX.Element => (
	<Image src={src ?? '/images/avatar.jpg'} className={size} {...rest} />
);

export default Avatar;

interface propsType {
	src?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	alt?: string;
}

export const Image = styled.img`
	border-radius: 100%;
	display: inline-block;
	border: 2px solid var(--light);

	&.sm {
		width: 48px;
		height: 48px;
	}

	&.md {
		width: 64px;
		height: 64px;
	}

	&.lg {
		width: 100px;
		height: 100px;
	}

	&.xl {
		width: 300px;
		height: 300px;
	}
`;
