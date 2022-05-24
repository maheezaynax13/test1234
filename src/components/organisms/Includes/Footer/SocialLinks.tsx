import Icon, { facebook, instagram, linkedin, twitter, youtube } from '@libs/icons';
import Link from 'next/link';
import { FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const LinkItem: FC<LinkItemProps> = ({ slug, path }) => {
	const [fillColor, setFillColor] = useState<string>('var(--light-gray)');

	return (
		<li>
			<Link href={slug}>
				<a
					target="blank"
					onMouseOver={() => setFillColor('var(--primary)')}
					onMouseOut={() => setFillColor('var(--light-gray)')}
				>
					<Icon path={path} fill={fillColor} />
				</a>
			</Link>
		</li>
	);
};

export const SocialLinks: FC<HTMLAttributes<HTMLUListElement>> = (props) => (
	<ListItems {...props}>
		<LinkItem slug={process.env.facebookURL} path={facebook} />
		<LinkItem slug={process.env.twitterURL} path={twitter} />
		<LinkItem slug={process.env.linkedinURL} path={linkedin} />
		<LinkItem slug={process.env.instagramURL} path={instagram} />
		<LinkItem slug={process.env.youtubeURL} path={youtube} />
	</ListItems>
);

interface LinkItemProps {
	slug: string;
	path: string;
}

const ListItems = styled.ul`
	margin: 0 0 0.5rem 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	li {
		padding: 0 0.5rem;
		list-style: none;
	}
`;
