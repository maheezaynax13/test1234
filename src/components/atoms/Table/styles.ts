import styled from 'styled-components';
import { getThemeColor } from '../utils';

export const TableWrapper = styled.table`
	width: 100%;
	margin-bottom: 1rem;
	color: #000000;
	border-collapse: collapse;

	thead {
		border-bottom: 1.5px solid ${getThemeColor('border')};
	}

	tfoot {
		border-top: 1.5px solid ${getThemeColor('border')};
	}

	td,
	th {
		padding: 0.75rem;
	}
`;
