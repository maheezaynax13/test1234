import Icon, { penEdit } from '@libs/icons';
import styled from 'styled-components';

const UpdateUID = ({ clickHandler, countdown }: propsType): JSX.Element => {
	if (countdown > 0) {
		return <Timer>Resend in {countdown} sec</Timer>;
	}

	return (
		<Button type="button" onClick={clickHandler}>
			<Icon path={penEdit} width={18} height={18} fill="var(--dark)" />
		</Button>
	);
};

export default UpdateUID;

interface propsType {
	clickHandler: () => void;
	countdown: number;
}

const Button = styled.button`
	position: absolute;
	top: 8px;
	right: 0px;
	padding: 0 15px;
	border: 0;
	background-color: transparent;
`;

const Timer = styled.span`
	position: absolute;
	top: 8px;
	right: 0px;
	padding: 0 15px;
	color: var(--primary);
`;
