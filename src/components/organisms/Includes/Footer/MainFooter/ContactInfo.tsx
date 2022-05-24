import Icon, { customerService, mailSend, phone } from '@libs/icons';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const ContactInfo: FC = () => (
	<Fragment>
		<Header>Contact US</Header>
		<ListItems>
			<li>
				<Icon path={customerService} width={16} height={16} fill="var(--dark)" />
				<span>Hotline:</span>
				<p className="mb-0">+8801929459195 (10am-10pm/Sat-Thur)</p>
			</li>
			<li>
				<Icon path={phone} width={16} height={16} fill="var(--dark)" />
				<span>Whole Sales:</span>
				<p className="mb-0">01929459195 (10am-12pm)</p>
			</li>
			<li>
				<Icon path={mailSend} width={16} height={16} fill="var(--dark)" />
				<span>Email:</span>
				<p className="mb-0">{process.env.supportEmail}</p>
			</li>
		</ListItems>
	</Fragment>
);

const Header = styled.h5`
	color: var(--dark);
	font-size: 0.875rem;
	font-weight: 600;
	text-transform: uppercase;
`;

const ListItems = styled.ul`
	margin: 0 0 1.875rem 0;
	padding: 0;

	li {
		list-style: none;
		display: block;
		margin-bottom: 0.5rem;
		margin-left: 1.375rem;
		position: relative;

		span {
			font-weight: 600;
		}

		svg {
			position: absolute;
			left: -22px;
			top: 6px;
		}
	}
`;
