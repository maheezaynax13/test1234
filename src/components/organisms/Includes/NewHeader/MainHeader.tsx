import { Brand, LabelDropdown } from '@components/molecules';
import { user } from '@libs/icons';
import { getUserState } from '@store/actions';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Cart } from './Cart';
import { DropdownUser } from './DropdownUser';
import { HeroSearch } from './HeroSearch';
import { NotificationBtn } from './NotificationBtn';

export const MainHeader: FC = () => {
	const { profile, isAuthenticate } = useSelector(getUserState);

	return (
		<HeaderWrapper>
			<Row className="w-100 mx-auto  align-items-center justify-content-center">
				<Col xs="auto">
					<Brand isClickable style={{ maxWidth: '6rem' }} />
				</Col>
				<Col md={8}>
					<HeroSearch />
				</Col>
				<Col xs="auto">
					<ListGroup>
						<NotificationBtn />
						<Cart />
						<LabelDropdown
							path={user}
							className="ps-0 LabelDropdown ms-3"
							label={profile?.firstName || 'Sign In'}
						>
							<DropdownUser />
						</LabelDropdown>
					</ListGroup>
				</Col>
			</Row>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div``;

const ListGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	/* margin-left: 2.5rem; */
`;
