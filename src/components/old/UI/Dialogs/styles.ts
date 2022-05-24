import { Modal as BSModal } from 'react-bootstrap';
import styled from 'styled-components';

export const Modal = styled(BSModal)`
	.modal-dialog {
		&.modal-sm {
			max-width: 260px;
		}
	}
`;

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	.btn {
		font-weight: 500;
		text-transform: uppercase;

		&-block + .btn-block {
			margin-top: 0;
			margin-left: 10px;
		}
	}
`;
