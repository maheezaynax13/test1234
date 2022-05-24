import { Avatar, Button, DropdownDivider, DropdownItem } from '@components/atoms';
import { authPopup, getUserState } from '@store/actions';
import { revokeAuthUser } from '@store/user/user.actions';
import Router from 'next/router';
import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const DropdownUser: FC = () => {
	const dispatch = useDispatch();
	const { isAuthenticate, profile } = useSelector(getUserState);

	return (
		<Wrapper>
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
				<ProfileWrapper>
					<DropdownItem
						type="button"
						className="d-flex align-items-center justify-content-between DropdownItem"
					>
						<Avatar size="sm" src={profile?.avatarURL} />
						<div className="ms-2">
							<p className="ProfileName" title={`${profile?.firstName} ${profile?.lastName}`}>
								{profile?.firstName} {profile?.lastName}
							</p>
							<span style={{ fontSize: '13px', color: 'var(--secondary)' }}>
								{profile?.email?.length > 0 ? profile.email : profile?.mobileNumber}
							</span>
						</div>
					</DropdownItem>
					<DropdownDivider />
				</ProfileWrapper>
			)}
			<DropdownItem className="DropdownItem" href="/user/my-account">
				My Account
			</DropdownItem>
			<DropdownItem className="DropdownItem" href="/cash-claim">
				Cash Claim
			</DropdownItem>
			{isAuthenticate && (
				<Fragment>
					<DropdownDivider />
					<DropdownItem
						className="DropdownItem"
						type="button"
						onClick={async () => {
							await revokeAuthUser();
							Router.push('/', undefined, { scroll: false });
						}}
					>
						Sign out
					</DropdownItem>
				</Fragment>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.DropdownItem {
		/* font-family: 'Barlow'; */
		font-weight: 500 !important;
	}
`;

const ProfileWrapper = styled.div`
	.ProfileName {
		margin-bottom: 0;
		max-width: 7.5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* font-family: 'Barlow'; */
		font-weight: 500;
	}
`;

export const ButtonGroup = styled.div`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		/* font-family: 'Barlow'; */
		font-weight: 500;
		color: var(--bs-white);
		background-color: var(--bs-primary);
		margin-right: 1rem;
		padding: 0.2rem 0.5rem;
		min-width: 5rem;

		&:hover {
			opacity: 0.9;
			color: var(--bs-white);
			background-color: var(--bs-primary);
		}

		&:last-child {
			margin-right: 0;
			color: var(--bs-dark);
			background-color: var(--bs-light);
			border-color: var(--bs-light);

			&:hover {
				opacity: 0.9;
				color: var(--bs-dark);
				background-color: var(--bs-light);
			}
		}
	}
`;
