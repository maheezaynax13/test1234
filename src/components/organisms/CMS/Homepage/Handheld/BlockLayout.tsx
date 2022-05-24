import { Link } from '@components/atoms';
import { FullWidthBanner } from '@components/molecules';
import { FC } from 'react';
import styled from 'styled-components';

export const BlockLayout: FC<BlockLayoutProps> = (props) => {
	const { icon, title, viewMoreLink, banner, children } = props;

	return (
		<Wrapper>
			<div className="w-100 mb-1">
				<img src={icon} width={19} height={19} alt="" />
				<span className="font-weight-semibold text-uppercase ml-1">{title}</span>
			</div>
			{banner && !!banner?.imageURL && (
				<FullWidthBanner
					href={banner?.slug}
					src={banner?.imageURL}
					alt={banner?.altText}
					style={{ borderRadius: '0.625rem' }}
				/>
			)}
			{children}
			<Link href={viewMoreLink} className="viewMoreLink bg-white">
				View more
			</Link>
		</Wrapper>
	);
};

interface IBanner {
	imageURL: string;
	altText: string;
	slug: string;
}
export interface BlockLayoutProps {
	icon: string;
	title: string;
	viewMoreLink: string;
	banner?: IBanner;
}

const Wrapper = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 2.5rem;

	.viewMoreLink {
		padding: 0.4rem 0.875rem;
		margin-top: 0.5rem;
		color: #999999;
		border-radius: 1rem;
		text-decoration: none;
		box-shadow: 0 3px 6px rgba(138, 138, 138, 0.08);
	}
`;
