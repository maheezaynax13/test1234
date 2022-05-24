import {
	SellOnFrequent,
	SellOnHeader,
	SellOnHelp,
	SellOnSelling,
	SellOnStore,
	SellOnTools,
} from '@components/organisms';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const SellOnZdrop: FC = () => {
	return (
		<Row>
			<Col>
				<SellOnHeader />
				<SellOnSelling />
				<SellOnTools />
				<SellOnStore />
				<SellOnFrequent />
				<SellOnHelp />
			</Col>
		</Row>
	);
};
