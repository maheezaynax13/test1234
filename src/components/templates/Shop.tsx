import { ShopBrandboard, ShopHomepage, ShopTabpage, ShopTabs } from '@components/organisms';
import { IShopInfo } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Shop: FC<IShopInfo> = (props) => {
	const {
		query: { tab, sort },
	} = useRouter();

	return (
		<Container>
			<Row>
				<Col>
					<ShopBrandboard {...props} />
					<ShopTabs />
					{!tab && !sort ? <ShopHomepage /> : <ShopTabpage />}
				</Col>
			</Row>
		</Container>
	);
};
