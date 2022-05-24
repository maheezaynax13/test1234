import { Badge, Image, Link } from '@components/atoms';
import Icon, { calender } from '@libs/icons';
import { IHomepageBlogs } from '@modules/api/cms/interfaces';
import dateFormat from 'dateformat';
import { FC } from 'react';
import styled from 'styled-components';

export const Blog: FC<IHomepageBlogs> = ({ image, date, link }) => {
	return (
		<Wrapper href={link}>
			<Badge rounded className="topper">
				Fashion
			</Badge>
			<Image fluid src={image} />
			<div className="footer">
				<span>
					<Icon path={calender} width={19} height={19} fill="var(--white)" />
					<span className="ml-1">{dateFormat(date, 'yyyy-mm-dd')}</span>
				</span>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled(Link)`
	position: relative;
	margin: 0.5rem;
	border-radius: 1rem;

	img {
		object-fit: cover;
		border-radius: 0.775rem;
		min-width: 100%;
		height: 15rem;
	}
	.topper {
		position: absolute;
		padding: 0.3rem 0.5rem;
		font-size: 14px;
		font-weight: 500;
		top: 15px;
		left: 15px;
	}
	.footer {
		width: 100%;
		position: absolute;
		padding: 20px 0 10px 10px;
		left: 0;
		bottom: 0;
		color: var(--white);
		font-weight: 500;
		border-bottom-left-radius: 0.775rem;
		border-bottom-right-radius: 0.775rem;
		background-image: linear-gradient(to bottom, transparent, #000000a0);
	}

	@media (min-width: 375px) {
		img {
			height: 12.5rem;
		}
	}
	@media (max-width: 320px) {
		img {
			height: 10rem;
		}
	}
`;
