import { CardWithBorder } from '@components/old/UI';
import Link from 'next/link';
import { FC } from 'react';
import { Image } from 'react-bootstrap';

export const Item: FC<PropsType> = ({ title, subTitle, imageUrl, link }) => (
	<Link href={link}>
		<a className="d-block mt-2 mb-2 text-decoration-none">
			<CardWithBorder className="text-center">
				<div className="Item-List__Image">
					<Image fluid src={imageUrl} style={{ maxHeight: '2.313rem', minHeight: '2.313rem' }} alt={title} />
				</div>
				<h5 className="text-dark">{title}</h5>
				<p className="text-secondary">{subTitle}</p>
			</CardWithBorder>
		</a>
	</Link>
);

interface PropsType {
	title: string;
	subTitle: string;
	imageUrl: string;
	link: string;
}
