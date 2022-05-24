import { Avatar, Card as CardCore, Link } from '@components/atoms';
import { getUserState } from '@store/actions';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const MemberNavbar: FC = () => {
	const {
		profile: { firstName, lastName, avatarURL },
	} = useSelector(getUserState);

	return (
		<Card>
			<CardHeader>
				<Avatar src={avatarURL} alt={firstName + ' ' + lastName} />
				<p className="font-weight-semibold mb-0">{firstName + ' ' + lastName}</p>
			</CardHeader>
			<CardBody>
				<ListGroup>
					<Link isActive href="/member/my-profile">
						My Account
					</Link>
					<Link isActive href="/member/address-book">
						Address Book
					</Link>
					<Link isActive href="/member/wishlist">
						Wishlist
					</Link>
					<hr />
					<Link isActive href="/member/orders">
						My Orders
					</Link>
					{/* <Link isActive href="/member/my-vouchers">
						My Vouchers
					</Link> */}
				</ListGroup>
			</CardBody>
		</Card>
	);
};

const Card = styled(CardCore)`
	padding: 0;
	margin-bottom: 1rem;
`;

const CardHeader = styled.div`
	padding: 0.703rem;
	text-align: center;
	border-bottom: 1px solid var(--border);
`;

const CardBody = styled.div`
	display: block;
`;

const ListGroup = styled.div`
	margin: 0;
	padding: 0.5rem 0;

	a {
		width: 100%;
		display: block;
		margin: 2px 0;
		padding: 0.313rem 0.625rem;
		color: var(--drak);

		&:hover {
			text-decoration: none;
			background-color: #f8f9fa;
		}

		&.active {
			width: 92%;
			color: var(--primary);
			background-color: #6fcf993b;
			border-radius: 0 1.406rem 1.406rem 0;
		}
	}
`;
