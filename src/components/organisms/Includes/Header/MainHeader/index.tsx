import { DropdownItem } from '@components/atoms';
import { Brand, LabelButton } from '@components/molecules';
import { useScroll } from '@libs/hooks';
import Icon, { cart, customerService, phone, question, user } from '@libs/icons';
import { getCartState, getUserState } from '@store/actions';
import Router from 'next/router';
import { FC, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Header, IconDropdown, LabelDropdown, ListGroup } from '../styles';
import { DropdownUser } from './DropdownUser';
import { HeroSearch } from './HeroSearch';
import { MegaMenu } from './MegaMenu';
import { NotificationBtn } from './NotificationBtn';

export const MainHeader: FC = () => {
	const [isShadow, setShadow] = useState<boolean>(false);
	const { totalItems } = useSelector(getCartState);
	const {
		isAuthenticate,
		profile: { firstName },
	} = useSelector(getUserState);

	const handleShadow = (pageYOffset: number) => {
		if (pageYOffset > 80) {
			setShadow(true);
		} else {
			setShadow(false);
		}
	};

	useScroll(({ pageYOffset }) => handleShadow(pageYOffset));

	return (
		<Header isShadow={isShadow}>
			<Container>
				<Row className="align-items-center">
					<Col xs="auto">
						<ListGroup>
							<Brand isClickable />
							<IconDropdown path={customerService}>
								<DropdownItem href={`tel:${process.env.supportNumber}`}>
									<Icon path={phone} width={16} height={16} fill="var(--dark)" />{' '}
									{process.env.supportNumber}
								</DropdownItem>
								<DropdownItem href="/help">
									<Icon path={question} width={16} height={16} fill="var(--dark)" /> Help center
								</DropdownItem>
							</IconDropdown>
							<MegaMenu />
						</ListGroup>
					</Col>
					<Col>
						<HeroSearch />
					</Col>
					<Col xs="auto">
						<ListGroup>
							<NotificationBtn />
							<LabelButton
								isCount={totalItems > 0}
								count={totalItems}
								path={cart}
								smallLabel="Shopping"
								label="Cart"
								onClick={() => Router.push('/cart')}
							/>
							<LabelDropdown
								path={user}
								smallLabel={isAuthenticate && 'Hello'}
								label={isAuthenticate ? firstName : 'Sign In'}
								alignRight
							>
								<DropdownUser />
							</LabelDropdown>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</Header>
	);
};
