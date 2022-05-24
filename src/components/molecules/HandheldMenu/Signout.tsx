import { FC } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { Button } from '@components/atoms';
import Icon, { logoutCircle } from '@libs/icons';
import { getUserState, revokeAuthUser } from '@store/actions';

export const Signout: FC = () => {
	const { isAuthenticate } = useSelector(getUserState);

	if (isAuthenticate) {
		return (
			<div className="Card">
				<Button
					variant="link"
					className="d-flex align-items-center text-dark p-0"
					onClick={async () => {
						await revokeAuthUser();
						Router.push('/');
					}}
				>
					<Icon path={logoutCircle} width={18} height={18} fill="var(--dark)" className="mr-2" /> Sign out
				</Button>
			</div>
		);
	}

	return null;
};
