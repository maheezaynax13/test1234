import { IconButton } from '@components/molecules';
import { barChartHorizontal, cart, homeSmile, user } from '@libs/icons';
import { getCartState, getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserNavbar } from './UserNavbar';

const fillColor = 'var(--dark)';
const fillColorActive = 'var(--primary)';
export const HandheldFloatNavbar: FC = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const router = useRouter();
	const { totalItems } = useSelector(getCartState);
	const { isAuthenticate } = useSelector(getUserState);

	useEffect(() => {
		if (isActive) {
			document.querySelector('body').classList.add('modal-open');
		} else {
			document.querySelector('body').classList.remove('modal-open');
		}

		return () => {
			document.querySelector('body').classList.remove('modal-open');
		};
	}, [isActive]);

	return (
		<Fragment>
			<Wrapper>
				<IconButton
					path={homeSmile}
					fill={router.pathname === '/' ? fillColorActive : fillColor}
					onClick={() => router.push('/')}
				/>
				<IconButton
					path={barChartHorizontal}
					fill={router.pathname === '/categories' ? fillColorActive : fillColor}
					onClick={() => router.push('/categories')}
				/>
				<IconButton
					isCount={totalItems > 0}
					count={totalItems}
					path={cart}
					fill={router.pathname === '/cart' ? fillColorActive : fillColor}
					onClick={() => router.push('/cart')}
				/>
				<IconButton
					path={user}
					fill={router.pathname === '/member/my-profile' ? fillColorActive : fillColor}
					onClick={() => (isAuthenticate ? setActive(true) : router.push('/signin'))}
				/>
			</Wrapper>
			<UserNavbar isActive={isActive} onHide={() => setActive(false)} />
		</Fragment>
	);
};

const Wrapper = styled.div`
	width: 100%;
	padding: 0.891rem 0.469rem;
	position: sticky;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: var(--white);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.29);
	z-index: 1;
`;
