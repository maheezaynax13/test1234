import { ReactNode } from 'react';
import styled from 'styled-components';

const Border = ({ children, ...rest }: propsType): JSX.Element => <Card {...rest}>{children}</Card>;
export default Border;

interface propsType {
	children: ReactNode;
	className?: string;
}

const Card = styled.div`
	padding: 11.25px;
	background-color: var(--white);
	border-radius: 10px;
	border: 1px solid #ececec;
`;
