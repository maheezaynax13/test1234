import { MemberLayout } from '@components/templates/Layouts';
import { customerAPI } from '@libs/api';
import { IBalance } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import { formatPrice } from '@utils/helpers';
import { NextPageContext } from 'next';
import { Card } from 'react-bootstrap';

const zDropBalance = ({ amount }: IBalance): JSX.Element => {
	return (
		<MemberLayout>
			<Card className="mt-3">
				<Card.Header>
					<p className="font-weight-semibold mb-0">Current Balance</p>
				</Card.Header>
				<Card.Body>
					<p className="text-secondary mb-0">A quick and convenient way for faster checkout and refund.</p>
					<h1 className="mb-0">{formatPrice(amount)}</h1>
				</Card.Body>
			</Card>
		</MemberLayout>
	);
};

zDropBalance.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const {
			success,
			data: { amount },
		} = await customerAPI.getBalance(ctx);
		if (success) return { amount };
	} catch (error) {
		return { amount: 0 };
	}
};

export default withAuth(zDropBalance);
