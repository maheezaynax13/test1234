import Icon, { deleteBin } from '@libs/icons';
import { Button } from '../styles';

const Delete = ({ bordered = false, clickHandler }: propsType): JSX.Element => (
	<Button variant="link" onClick={clickHandler} className={bordered ? 'isBorder' : ''}>
		<Icon path={deleteBin} width={20} height={20} fill="#F20045" />
	</Button>
);

export default Delete;

interface propsType {
	bordered?: boolean;
	clickHandler: () => void;
}
