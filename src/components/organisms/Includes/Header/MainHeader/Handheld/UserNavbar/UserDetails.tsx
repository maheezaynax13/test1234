import { Avatar, Button } from '@components/atoms';
import { IconButton, IconButtonProps } from '@components/molecules';
import Icon, { arrowLeft, loveO, userSettings } from '@libs/icons';
import { getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const UserDetails: FC<Pick<IconButtonProps, 'onClick'>> = (props) => {
	const router = useRouter();
	const {
		profile: { avatarURL, firstName, lastName, mobileNumber },
	} = useSelector(getUserState);

	return (
		<Wrapper>
			<Row>
				<Col>
					<IconButton path={arrowLeft} width={20} height={20} fill="var(--white)" {...props} />
				</Col>
				<Col className="text-right">
					<IconButton
						path={userSettings}
						width={20}
						height={20}
						fill="var(--white)"
						onClick={(e) => {
							props.onClick(e);
							router.push('/member/my-profile');
						}}
					/>
				</Col>
				<Col xs={12} className="text-center">
					<Avatar src={avatarURL} alt={firstName + ' ' + lastName} className="d-block mx-auto" />
					<p className="text-white font-weight-semibold mt-2 mb-0">{firstName + ' ' + lastName}</p>
					<p className="text-white">{mobileNumber}</p>

					<NavList>
						<li>
							<Button
								variant="link"
								onClick={(e) => {
									props.onClick(e);
									router.push('/member/wishlist');
								}}
							>
								<Icon path={loveO} width={16} height={16} fill="var(--white)" />
								<span>Wishlist</span>
							</Button>
						</li>
					</NavList>
				</Col>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: block;
	padding: 1rem;
	background-image: url('/images/user_background.svg');
	background-size: cover;
	background-repeat: no-repeat;
	border-bottom-left-radius: 1.25rem;
	border-bottom-right-radius: 1.25rem;
`;

const NavList = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	display: block;
	text-align: left;

	li {
		list-style: none;
		display: inline-block;

		button {
			padding: 0;

			span {
				width: 100%;
				display: block;
				color: var(--white);
				font-size: 0.75rem;
			}
		}
	}
`;
