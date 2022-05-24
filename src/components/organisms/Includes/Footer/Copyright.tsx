import { FC } from 'react';
import styled from 'styled-components';

export const Copyright: FC = () => <Text>Copyright &copy; {new Date().getFullYear()} zDrop All rights reserved</Text>;

const Text = styled.p`
	font-size: 0.813rem;
	color: #989898;
	text-align: center;
	margin-bottom: 0;
`;
