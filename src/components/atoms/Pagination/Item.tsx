import { FC, MouseEventHandler } from 'react';
import { PagiItem, PagiItemDots } from './styles';

export const Item: FC<PagiItemProps> = (props) => {
	const { isDots, children, ...rest } = props;

	return <li>{isDots ? <PagiItemDots>{children}</PagiItemDots> : <PagiItem {...rest}>{children}</PagiItem>}</li>;
};

interface PagiItemProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	isDots?: boolean;
	className?: string;
}
