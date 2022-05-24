import { FC } from 'react';
import { Link } from '../Link';
import { Wrapper } from './styles';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ data }) => {
	if (data?.length > 0) {
		return (
			<Wrapper>
				<ul>
					{data.map(({ title, href }, i) => (
						<li key={i}>{href ? <Link href={href}>{title}</Link> : <span>{title}</span>}</li>
					))}
				</ul>
			</Wrapper>
		);
	}

	return null;
};

export interface BreadcrumbsProps {
	data: BreadCrumbProps[];
}

interface BreadCrumbProps {
	href?: string;
	title: string;
}

export { Wrapper as BreadcrumbsWrapper };
