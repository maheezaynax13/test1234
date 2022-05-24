import { Card, CardBody, CardHeader } from '@components/atoms';
import { FC, HTMLAttributes } from 'react';

export const ContentCard: FC<ContentCardProps> = ({ title, children, ...rest }) => {
	return (
		<Card {...rest}>
			{title && (
				<CardHeader>
					<p className="mb-0">{title}</p>
				</CardHeader>
			)}
			<CardBody>{children}</CardBody>
		</Card>
	);
};

export interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
}
