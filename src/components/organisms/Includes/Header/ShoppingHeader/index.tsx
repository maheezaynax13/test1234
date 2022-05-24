import { Brand } from '@components/molecules';
import { useScroll } from '@libs/hooks';
import { FC, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../styles';

export const ShoppingHeader: FC = () => {
	const [isShadow, setShadow] = useState<boolean>(false);

	const handleShadow = (pageYOffset: number) => {
		if (pageYOffset > 80) {
			setShadow(true);
		} else {
			setShadow(false);
		}
	};

	useScroll(({ pageYOffset }) => handleShadow(pageYOffset));

	return (
		<Header isShadow={isShadow}>
			<Container>
				<Row>
					<Col className="text-center">
						<Brand isClickable />
					</Col>
				</Row>
			</Container>
		</Header>
	);
};
