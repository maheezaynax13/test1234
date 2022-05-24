// import { Button } from '@components/atoms';
import { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { TrackOrderForm } from './TrackOrderForm';

export const TrackOrderPopup: FC<PropsType> = ({ isActive, onHide }) => {
	return (
		<Modal centered size="sm" show={isActive} onHide={onHide}>
			<ModalHeader className="border-0 p-0 m-0" closeButton></ModalHeader>
			<Modal.Body style={{ marginTop: '-5px' }}>
				<TabList>
					<Button active variant="link">
						Track Order
					</Button>
				</TabList>

				<TrackOrderForm closeForm={onHide} />
			</Modal.Body>
		</Modal>
	);
};

interface PropsType {
	isActive: boolean;
	onHide: () => void;
}

const ModalHeader = styled(Modal.Header)`
	justify-content: center;
`;

const TabList = styled.div`
	display: flex;
	margin: 0 0 16px 0;
	padding: 0;
	border-bottom: 1px solid #dee2e6;

	button {
		position: relative;
		width: 50%;
		color: #515151;
		font-weight: 500;
		text-align: center;
		padding: 8px 0;
		border: 0;
		text-transform: uppercase;

		&:hover,
		&:focus {
			color: #515151;
			text-decoration: none;
		}

		&.active {
			color: var(--primary);

			&:after {
				position: absolute;
				left: 0;
				bottom: -1px;
				content: '';
				width: 100%;
				height: 4px;
				display: block;
				background-color: #00b55b;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;
