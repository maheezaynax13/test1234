import { Button, FormInput } from '@components/atoms';
import { useClickOutside } from '@libs/hooks';
import { handleNumberOnly, updateURLSearchParams } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PickerButton } from './PickerButton';
import { DropdownMenu } from './styles';

export const FilterByPrice: FC = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const [values, setValues] = useState<typeof initialValues>(initialValues);
	const { wrapperRef } = useClickOutside(() => setActive(false));
	const router = useRouter();

	useEffect(() => {
		const {
			query: { minPrice = '', maxPrice = '' },
		} = router;
		const parmas = { minPrice, maxPrice };
		for (const [key, value] of Object.entries(parmas)) {
			if (!Array.isArray(value)) setValues((prevState) => ({ ...prevState, [key]: value }));
		}
	}, [router]);

	const handleFilter = () => {
		setActive(false);
		const { pathname, query } = router;
		const params = updateURLSearchParams(query, values);
		router.push({ pathname, query: params.toString() });
	};

	return (
		<Row className="align-items-center">
			<Col md="auto" className="d-none d-md-block">
				<span className="border-right pr-3">Refine by</span>
			</Col>
			<Col>
				<div className="position-relative" ref={wrapperRef}>
					<PickerButton onClick={() => setActive((prevState) => !prevState)}>
						{values.minPrice && values.maxPrice ? `${values.minPrice} – ${values.maxPrice}` : 'Price'}
					</PickerButton>
					{isActive && (
						<DropdownMenu>
							<div className="d-flex align-items-center">
								<FormInput
									srOnly
									className="mb-0"
									placeholder="Min"
									value={values.minPrice}
									onChange={({ target: { value } }) =>
										setValues((prevState) => ({ ...prevState, minPrice: value }))
									}
									onKeyDown={handleNumberOnly}
								/>
								<span className="pl-1 pr-1">-</span>
								<FormInput
									srOnly
									className="mb-0"
									placeholder="Max"
									value={values.maxPrice}
									onChange={({ target: { value } }) =>
										setValues((prevState) => ({ ...prevState, maxPrice: value }))
									}
									onKeyDown={handleNumberOnly}
								/>
								<Button onClick={handleFilter} className="ButtonGo">
									GO
								</Button>
							</div>
						</DropdownMenu>
					)}
				</div>
			</Col>
		</Row>
	);
};

const initialValues = {
	minPrice: '',
	maxPrice: '',
};
