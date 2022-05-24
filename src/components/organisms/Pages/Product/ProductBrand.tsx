import { IconDropdown } from '@components/molecules';
import { ISingleProduct } from '@libs/api/interfaces';
import { share } from '@libs/icons';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';

export const ProductBrand: FC<ProductBrandProps> = ({ brand, origin }) => {
	const router = useRouter();
	const productUrl = `${process.env.publicURL}${router.asPath}`;

	return (
		<div className="d-flex justify-content-between align-items-center">
			{brand && brand?.name?.toLowerCase() !== 'no brand' ? (
				<p className="font-weight-semibold mb-1">
					{brand?.name} {origin && <span className="font-weight-normal text-secondary">({origin})</span>}
				</p>
			) : (
				<span />
			)}
			<IconDropdown alignRight path={share} width={20} height={20} className="p-0 text-right ml-auto">
				<div className="pl-2">
					Share via:
					<FacebookShareButton className="ml-1" url={productUrl}>
						<FacebookIcon round size={24} />
					</FacebookShareButton>
					<TwitterShareButton className="ml-1" url={productUrl}>
						<TwitterIcon round size={24} />
					</TwitterShareButton>
					<EmailShareButton className="ml-1" url={productUrl}>
						<EmailIcon round size={24} />
					</EmailShareButton>
				</div>
			</IconDropdown>
		</div>
	);
};

export type ProductBrandProps = Partial<Pick<ISingleProduct, 'brand' | 'origin'>>;
