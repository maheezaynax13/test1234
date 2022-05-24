import { FC, HTMLAttributes } from 'react';
import { Wrapper, CardHeader, CardBody } from './styles';
import { ElementBorders } from '../interfaces';

export const Card: FC<CardProps> = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export interface CardProps extends Pick<ElementBorders, 'pill'>, HTMLAttributes<HTMLElement> {
	shadow?: boolean;
}

Card.defaultProps = {
	shadow: false,
};

export { CardHeader, CardBody };
