import { Avatar } from '@components/atoms';
import { IShopInfo } from '@libs/api/interfaces';
import Icon, { userStar } from '@libs/icons';
import { getAppState } from '@store/actions';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ShopBrandboard: FC<IShopInfo> = (props) => {
	const { seller_logo, store_banner, shop_name, followerCount } = props;
	const { isMobile } = useSelector(getAppState);

	return (
		<Wrapper style={{ backgroundImage: `url(${store_banner})` }}>
			<Row className="align-items-center">
				<Col xs="auto">
					<Avatar
						size={isMobile ? 'md' : 'lg'}
						src={seller_logo && seller_logo !== '' ? seller_logo : '/images/avatar-shop.png'}
						alt={shop_name}
					/>
				</Col>
				<Col>
					<h5 className="text-white">{shop_name}</h5>
					<div className="d-md-flex align-items-center">
						<Icon width={18} height={18} path={userStar} fill="var(--white)" />
						<span className="text-white ml-1">{followerCount} Followers</span>
						{/* <Button pill className="ml-3 pt-1 pb-1">
							Follow
						</Button> */}
					</div>
				</Col>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	min-height: 13rem;
	max-height: 13rem;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	padding: 0 1.563rem;
	border-radius: 0.625rem;
	background-size: cover;
	background-color: var(--primary);

	&:before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to right, var(--dark), transparent);
	}

	@media (max-width: 767.98px) {
		min-height: 10rem;
		max-height: 10rem;
	}
`;
