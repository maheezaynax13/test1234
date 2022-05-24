import { MainLayout, SellOnZdrop as SellOnZdropComponent } from '@components/templates';
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';

const SellOnZdrop: NextPage = (props) => (
	<MainLayout {...props}>
		<Container>
			<SellOnZdropComponent />
		</Container>
	</MainLayout>
);

export default SellOnZdrop;
