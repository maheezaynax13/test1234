/* eslint-disable no-empty */
import { GridProductList } from '@components/organisms';
import { useProduct } from '@libs/hooks';
import { FC } from 'react';

const Recommendations: FC<PropsType> = ({ id }) => {
	const { recommended: items } = useProduct(id);

	if (items && items.length > 0) {
		return (
			<div className="w-100 mb-5">
				<h3 className="mb-3" style={{ fontSize: '1.125rem' }}>
					Recommendations
				</h3>
				<GridProductList items={[...items.slice(0, 12)]} />
			</div>
		);
	}

	return null;
};

export default Recommendations;

interface PropsType {
	id: string;
}
