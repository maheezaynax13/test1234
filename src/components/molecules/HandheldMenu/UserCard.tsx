import { Avatar, Button } from '@components/atoms';
import Icon, { loginCircle, riSettings } from '@libs/icons';
import { getUserState } from '@store/actions';
import Router from 'next/router';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const UserCard: FC = () => {
	const {
		profile: { avatarURL, firstName, lastName },
		isAuthenticate,
	} = useSelector(getUserState);

	return (
		<div className="Card">
			<div className="d-flex align-items-center">
				<Avatar src={avatarURL} alt="Avatar" className="mr-2" />
				{isAuthenticate ? (
					<div className="d-block">
						<p className="text-dark mb-1">{firstName + ' ' + lastName}</p>
						<Button
							pill
							className="d-flex align-items-center pt-1 pb-1"
							onClick={() => Router.push('/member/my-profile')}
						>
							<Icon path={riSettings} width={16} height={16} fill="#ffffff" className="mr-1" /> Profile
						</Button>
					</div>
				) : (
					<Button pill className="d-flex align-items-center pt-1 pb-1" onClick={() => Router.push('/signin')}>
						<Icon path={loginCircle} width={16} height={16} fill="#ffffff" className="mr-1" /> Sign In
					</Button>
				)}
			</div>
		</div>
	);
};
