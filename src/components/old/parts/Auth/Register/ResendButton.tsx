import styled from 'styled-components';

const ResendButton = ({ clickHandler }: propsType): JSX.Element => {
	return (
		<Button type="button" onClick={clickHandler}>
			Send
		</Button>
	);
};

export default ResendButton;

interface propsType {
	clickHandler: () => void;
}

const Button = styled.button`
	position: absolute;
	top: 8px;
	right: 0px;
	padding: 0 15px;
	border: 0;
	color: var(--primary);
	font-weight: 500;
	text-transform: uppercase;
	background-color: transparent;

	&:hover {
		color: #008241;
	}
`;
