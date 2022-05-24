import { Tag } from '../styles';

const Badge = ({ children }: propsType): JSX.Element => <Tag pill>{children}</Tag>;

export default Badge;

interface propsType {
	children: unknown;
}
