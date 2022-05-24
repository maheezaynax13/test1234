import { IAllOrders } from '@libs/api/interfaces';
import { FC, Fragment } from 'react';
import { PackageFooter } from './PackageFooter';
import { PackageHeader } from './PackageHeader';
import { PackageProduct } from './PackageProduct';

export const PackageItem: FC<PackageItemProps> = (props) => {
	const { shopInfo, fulfilledby, packageName, items, clickHandler, hideViewDetail, ...rest } = props;
	const headerProps = { shopInfo, fulfilledby, packageName };

	return (
		<Fragment>
			<PackageHeader {...headerProps} />
			{items?.map((e, i) => (
				<PackageProduct
					key={i}
					{...e}
					clickHandler={() => {
						const newObj = { ...props };
						newObj.items = [e];
						clickHandler(newObj);
					}}
					hideViewDetail={hideViewDetail}
				/>
			))}
			<PackageFooter {...rest} />
		</Fragment>
	);
};

type Package = IAllOrders['items'][0]['packages'][0];
export interface PackageItemProps extends Package {
	clickHandler?: (data: Package) => void;
	hideViewDetail?: boolean;
}
