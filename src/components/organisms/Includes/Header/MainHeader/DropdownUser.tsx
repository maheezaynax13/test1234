import { Avatar, Button, DropdownDivider, DropdownItem } from '@components/atoms';
import { authPopup, getUserState, revokeAuthUser } from '@store/actions';
import Router from 'next/router';
import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const DropdownUser: FC = () => {
	const dispatch = useDispatch();
	const { isAuthenticate, profile } = useSelector(getUserState);

	return (
		<Fragment>
			{!isAuthenticate && (
				<Fragment>
					<ButtonGroup>
						<Button onClick={() => dispatch(authPopup({ isActive: true, type: 'register' }))}>
							Register
						</Button>
						<Button onClick={() => dispatch(authPopup({ isActive: true, type: 'signin' }))}>Sign In</Button>
					</ButtonGroup>
					<DropdownDivider />
				</Fragment>
			)}
			{isAuthenticate && (
				<Fragment>
					<DropdownItem type="button" className="d-flex align-items-center justify-content-between">
						<Avatar size="sm" src={profile?.avatarURL} />
						<div className="ml-2">
							<p className="mb-0 font-weight-semibold">
								{profile?.firstName} {profile?.lastName}
							</p>
							<span style={{ fontSize: '13px', color: 'var(--secondary)' }}>
								{profile?.email?.length > 0 ? profile.email : profile?.mobileNumber}
							</span>
						</div>
					</DropdownItem>
					<DropdownDivider />
				</Fragment>
			)}
			<DropdownItem href="/member/my-profile">My Account</DropdownItem>
			<DropdownItem href="/member/wishlist">Wishlist</DropdownItem>
			<DropdownItem href="/member/orders">Orders</DropdownItem>
			<DropdownItem href="/member/address-book">Address Book</DropdownItem>
			{isAuthenticate && (
				<Fragment>
					<DropdownDivider />
					<DropdownItem
						type="button"
						onClick={async () => {
							await revokeAuthUser();
							Router.push('/');
						}}
					>
						Sign out
					</DropdownItem>
				</Fragment>
			)}
		</Fragment>
	);
};

const ButtonGroup = styled.div`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		color: var(--white);
		background-color: var(--primary);
		margin-right: 1rem;
		padding: 0.2rem 0.5rem;
		width: 4rem;

		&:hover {
			opacity: 0.9;
			color: var(--white);
			background-color: var(--primary);
		}

		&:last-child {
			margin-right: 0;
			color: var(--dark);
			background-color: var(--light);
			border-color: var(--light);

			&:hover {
				opacity: 0.9;
				color: var(--dark);
				background-color: var(--light);
			}
		}
	}
`;
