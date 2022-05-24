/* eslint-disable indent */
import { Badge, Button, ButtonProps } from '@components/atoms';
import Icon, { close } from '@libs/icons';
import { formatStatus, updateURLSearchParams } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SectionWrapper } from './styles';

const BadgeChips: FC<ButtonProps> = ({ children, ...rest }) => (
	<Badge pill variant="light" className="text-secondary border mr-2 mb-2 px-2">
		<div className="d-flex align-items-center">
			{children}
			<Button
				{...rest}
				variant="link"
				className="rounded-circle p-0 border"
				style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}
			>
				<Icon path={close} width={12} height={12} style={{ marginTop: '-0.75rem' }} />
			</Button>
		</div>
	</Badge>
);

export const FilterChips: FC = () => {
	const router = useRouter();
	const { pathname, query } = router;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { tab, sellerID, query: q, page, brandSlug, categorySlugTree, ...rest } = query;

	const handleClear = () => {
		const params = updateURLSearchParams(query, {});
		for (const key of Object.keys(rest)) {
			params.delete(key);
		}
		router.push({ pathname, query: params.toString() });
	};

	const handleClearItem = (key: string[]) => {
		const params = updateURLSearchParams(query, {});
		key?.forEach((e) => params.delete(e));
		router.push({ pathname, query: params.toString() });
	};

	const { priceMin, priceMax, ...restParams } = rest;

	if (Object.keys(rest)?.length) {
		return (
			<SectionWrapper>
				<p className="Header">Filters</p>
				{priceMin && priceMax && (
					<BadgeChips onClick={() => handleClearItem(['priceMin', 'priceMax'])}>
						Price: {priceMin} – {priceMax}
					</BadgeChips>
				)}
				{Object.entries(restParams).map(([key, value], i) => (
					<BadgeChips key={i} onClick={() => handleClearItem([`${key}`])}>
						{formatStatus(key.replace(/[A-Z]/g, (x) => ` ${x.toLowerCase()}`))}:{' '}
						{Array.isArray(value)
							? value
									?.map((e) => e)
									.join()
									.replace(/_/g, ' ')
									.replace(/,/g, ', ')
									.toLowerCase()
							: value?.replace(/_/g, ' ').toLowerCase()}
					</BadgeChips>
				))}
				<Button pill variant="danger" className="ClearButton" onClick={handleClear}>
					Clear all
				</Button>
			</SectionWrapper>
		);
	}

	return null;
};
