import { ISingleProduct } from '@libs/api/interfaces';
import { formatStatus } from '@utils/helpers';
import { FC } from 'react';
import { Table } from 'react-bootstrap';

const Specifications: FC<PropsType> = ({ data }) => (
	<Table responsive>
		<tbody>
			{data.map(({ name, value }, i) => (
				<tr key={i}>
					<th style={{ width: '25%' }}>{formatStatus(name)}</th>
					<td style={{ width: '75%', verticalAlign: 'middle' }}>{value}</td>
				</tr>
			))}
		</tbody>
	</Table>
);

export default Specifications;

interface PropsType {
	data: ISingleProduct['specification'];
}
