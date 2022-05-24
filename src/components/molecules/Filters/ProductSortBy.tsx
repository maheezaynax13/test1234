import { useClickOutside } from '@libs/hooks';
import { sortOptions } from '@utils/constants';
import { updateURLSearchParams } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PickerButton } from './PickerButton';
import { DropdownMenu } from './styles';

export const ProductSortBy: FC = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const [selected, setSelected] = useState<string>('best_seller');
	const { wrapperRef } = useClickOutside(() => setActive(false));
	const router = useRouter();

	useEffect(() => {
		const {
			query: { sortBy = '' },
		} = router;
		if (!Array.isArray(sortBy)) setSelected(sortBy);
	}, [router]);

	const handleClicked = (sortBy: string) => {
		setActive(false);
		setSelected(sortBy);
		const { pathname, query } = router;
		const params = updateURLSearchParams(query, { sortBy });
		router.push({ pathname, query: params.toString() });
	};

	return (
		<Row className="align-items-center">
			<Col md="auto" className="d-none d-md-block">
				<span className="border-right pr-3">Sort by</span>
			</Col>
			<Col>
				<div className="position-relative" ref={wrapperRef}>
					<PickerButton onClick={() => setActive((prevState) => !prevState)}>
						{sortOptions?.find((e) => e.value === selected)?.label ?? 'Choose an option'}
					</PickerButton>
					{isActive && (
						<DropdownMenu as="ul" className="pt-2 pb-2" style={{ minWidth: '9.375rem' }}>
							{sortOptions.map(({ label, value }, i) => (
								<li key={i}>
									<button
										className={`ButtonItem${selected === value ? ' active' : ''}`}
										onClick={() => handleClicked(value)}
									>
										{label}
									</button>
								</li>
							))}
						</DropdownMenu>
					)}
				</div>
			</Col>
		</Row>
	);
};
