import { NavLink } from '@components/molecules';
import { getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const HeaderLinks: FC = () => {
	const router = useRouter();
	const { asPath } = router;
	const { profile, isAuthenticate } = useSelector(getUserState);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<NavLinkWrapper>
				<NavLink href="/about" variant="dark" title="Who We Are?" />
				<NavLink href="/management-team" variant="dark" title="Management Team" />
				<NavLink href="/health-packages" variant="dark" title="Membership" />
				{/* <NavTooltip title="Doctor Call" /> */}
				{/* <NavButton onClick={handleCallDoctor}>Doctor Call</NavButton> */}
				<NavLink href="/cash-claim" variant="dark" title="Cash Claim" />
				<NavLink href="https://blog.zaynaxhealth.com/" variant="dark" title="Media" />
				<NavLink href="/contact-us" variant="dark" title="Contact Us" />
				{/* <NavLink href="/health-mart" variant="dark" title="Health Mart" /> */}
			</NavLinkWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* margin: 0.15rem 0; */
`;

const NavLinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& > button,
	p,
	a {
		font-size: 0.825rem;
		font-weight: 500;
		line-height: 1.5;
		height: 100%;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
			text-decoration-color: var(--bs-primary);
		}

		&:not(:last-child) {
			margin-right: 1.5rem;
		}
	}
`;
