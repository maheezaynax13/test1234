import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup, Modal } from './styles';

const Danger: FC<PropsType> = ({ title, clickHandler, children, primaryBtn, secondaryBtn, ...rest }) => (
	<Modal centered size="sm" backdrop="static" {...rest}>
		{title && (
			<Modal.Header>
				<Modal.Title className="h5">{title}</Modal.Title>
			</Modal.Header>
		)}
		<Modal.Body>
			{children}
			<ButtonGroup>
				<Button block variant="light" onClick={rest.onHide}>
					{secondaryBtn ?? 'Cancel'}
				</Button>
				<Button block variant="danger" onClick={clickHandler}>
					{primaryBtn ?? 'Delete'}
				</Button>
			</ButtonGroup>
		</Modal.Body>
	</Modal>
);

export default Danger;

interface PropsType {
	show: boolean;
	onHide: () => void;
	clickHandler: () => void;
	title?: string;
	primaryBtn?: string;
	secondaryBtn?: string;
}
