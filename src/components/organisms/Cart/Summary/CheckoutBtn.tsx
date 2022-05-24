import { Button, ButtonProps, FormCheck, Link } from '@components/atoms';
import { useRouter } from 'next/router';
import { FC, Fragment, useState } from 'react';

export const CheckoutBtn: FC<ButtonProps> = (props) => {
	const [isChecked, setChecked] = useState<boolean>(false);
	const router = useRouter();

	if (router.pathname === '/cart') {
		return (
			<div className="w-100 mt-2">
				<FormCheck
					id="cartCheck"
					type="checkbox"
					label={
						<Fragment>
							I agree to the <Link href="/terms-of-use">Terms of Use</Link>,{' '}
							<Link href="/privacy-policy">Privacy Policy</Link> &{' '}
							<Link href="/refund-policy">Refund Policy</Link>
						</Fragment>
					}
					checked={isChecked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<Button {...props} onClick={() => router.push('/shipping')} disabled={!isChecked}>
					Checkout
				</Button>
			</div>
		);
	}

	return null;
};

CheckoutBtn.defaultProps = {
	block: true,
	pill: true,
	size: 'lg',
};
