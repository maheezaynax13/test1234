import { CheckoutSummary, EmptyCart, PackageItems } from '@components/organisms';
import { ICart } from '@libs/api/interfaces';
import { FC, Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Cart: FC<ICart> = (props) => {
	const [cartData, setCartData] = useState<ICart['packages']>(null);

	useEffect(() => {
		const { packages } = props;
		setCartData(packages);
	}, [props]);

	return (
		<Container>
			<Row>
				{props?.totalItems > 0 ? (
					<Fragment>
						<Col md={8} xl={9}>
							{cartData?.map((el, i) => {
								const packProps = { ...el, packageNumber: i + 1, setCartData };
								return <PackageItems key={i} {...packProps} />;
							})}
						</Col>
						<Col md={4} xl={3}>
							<CheckoutSummary />
						</Col>
					</Fragment>
				) : (
					<Col>
						<EmptyCart />
					</Col>
				)}
			</Row>
		</Container>
	);
};
