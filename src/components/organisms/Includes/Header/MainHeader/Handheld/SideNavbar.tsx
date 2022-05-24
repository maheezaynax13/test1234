import { MenuItem, Signout, UserCard } from '@components/molecules';
import { copperCoin, question, smartphone } from '@libs/icons';
import { getAppState } from '@store/actions';
import { FC, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const menuWidth = '305px';
export const SideNavbar: FC<PropsType> = ({ isActive, onHide }) => {
	const { dealLinks } = useSelector(getAppState);

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
			<Wrapper style={{ left: isActive ? '0' : `-${menuWidth}` }}>
				<UserCard />
				<div className="Card">
					{dealLinks?.map(({ link, iconURL, title }, i) => (
						<MenuItem key={i} isImage variant="dark" href={link} title={title} src={iconURL} />
					))}
				</div>
				{/* <div className="Card">
					<MenuItem variant="dark" href="/" title="zDrop Blog" path={pencil} />
					<MenuItem variant="dark" href="/help" title="Help Center" path={customerService} />
				</div> */}
				<div className="Card">
					<MenuItem variant="dark" href="/sell-on-zdrop" title="Sell On zDrop" path={copperCoin} />
					<MenuItem
						variant="dark"
						href="https://play.google.com/store/apps/details?id=com.zdrop.bd"
						title="Download App"
						path={smartphone}
					/>
					<MenuItem href="/help" title="Help" path={question} fill="var(--primary)" />

					<MenuItem href="/about" title="About zDrop" fill="var(--primary)">
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.272" viewBox="0 0 20.659 15.272">
							<g transform="translate(-178.167 -657)">
								<path
									d="M105.015,70.719l5.666,6.381a1.1,1.1,0,0,0,1.1.343l6.99-1.713V67l-13.513,2.976a.455.455,0,0,0-.328.3A.46.46,0,0,0,105.015,70.719Z"
									transform="translate(73.262 594.796)"
									fill="#00b55b"
								/>
								<path
									d="M124.49,67v8.729l6.53-1.592a.336.336,0,0,0,.156-.571Z"
									transform="translate(67.547 594.796)"
									fill="#02c865"
								/>
								<ellipse
									cx="1.671"
									cy="1.684"
									rx="1.671"
									ry="1.684"
									transform="translate(191.69 657)"
									fill="#00b55b"
								/>
							</g>
						</svg>
					</MenuItem>
				</div>
				<Signout />
			</Wrapper>
			{isActive && <Backdrop onClick={onHide} />}
		</Fragment>
	);
};

interface PropsType {
	isActive?: boolean;
	onHide?: () => void;
}

SideNavbar.defaultProps = {
	isActive: false,
};

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 18.75rem;
	height: 100%;
	overflow: hidden;
	overflow-y: auto;
	background-color: var(--white);
	transition: 0.3s;
	box-shadow: 0 0 6px rgba(138, 138, 138, 0.24);
	z-index: 999;

	.Card {
		padding: 1rem 1.25rem;
		display: block;
		border-bottom: 1px solid var(--border);

		&:last-child {
			border-bottom-color: transparent;
		}
	}
`;

const Backdrop = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 99;
`;
