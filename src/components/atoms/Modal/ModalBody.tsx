import { FC, HTMLAttributes } from 'react';
import { BodyWrapper } from './styles';

export const ModalBody: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return <BodyWrapper {...rest}>{children}</BodyWrapper>;
};
