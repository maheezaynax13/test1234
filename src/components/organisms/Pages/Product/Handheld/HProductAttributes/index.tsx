import { IUseProduct } from '@libs/hooks';
import { authPopup, getUserState } from '@store/actions';
import { formatTitleCase } from '@utils/helpers';
import { Dispatch, FC, Fragment, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProductAttributes } from '../../ProductAttributes';
import { HProductFloatingBar, HProductFloatingBarProps } from '../HProductFloatingBar';
import { BottomSheet, BottomSheetProps } from './BottomSheet';

export const HProductAttributes: FC<HProductAttributesProps> = (props) => {
	const [isActive, setActive] = useState<boolean>(false);
	const { mainImage, attributes, stock, handleAddToCart, handleWishlist, isWishlist, setPopupModal } = props;
	const dispatch = useDispatch();
	const { isAuthenticate } = useSelector(getUserState);

	const afterAddedToCart = () => {
		setActive(false);
		setPopupModal(true);
	};

	const sheetProps: BottomSheetProps = {
		isActive,
		onHide: () => setActive(false),
		clickHandler: () => handleAddToCart(afterAddedToCart),
		mainImage,
		attributes,
		stock,
	};

	const buttonGroupProps: HProductFloatingBarProps = { onClick: handleWishlist, isActive: isWishlist };

	const attrsProps = { attributes: [], stock };
	const totalAttributes: Record<string, number> = {};
	if (attributes?.length > 0) {
		attributes.map(({ name }) => {
			if (totalAttributes[name]) {
				totalAttributes[name]++;
			} else {
				totalAttributes[name] = 1;
			}
		});

		attrsProps.attributes = attributes.filter(({ name }) => name === attributes[0].name).slice(0, 4);
	}

	return (
		<Fragment>
			<Wrapper>
				<SheetButton onClick={() => setActive(true)}>
					<p className="font-weight-semibold mb-0">
						{totalAttributes &&
							Object.entries(totalAttributes)?.map(
								([key, value], i) =>
									`${value} ${formatTitleCase(key)}${
										i + 1 < Object.keys(totalAttributes).length ? ', ' : ''
									}`,
							)}
					</p>
					<ProductAttributes {...attrsProps} clickHandler={() => setActive(true)} />
				</SheetButton>
				<BottomSheet {...sheetProps} />
			</Wrapper>

			<HProductFloatingBar
				{...buttonGroupProps}
				clickHandler={() => {
					if (isAuthenticate) {
						setActive(true);
					} else {
						dispatch(authPopup({ isActive: true, type: 'signin' }));
					}
				}}
				fill="var(--primary)"
			/>
		</Fragment>
	);
};

type PropsType = Pick<IUseProduct, 'isWishlist' | 'handleAddToCart' | 'handleWishlist'> &
	Omit<BottomSheetProps, 'isActive' | 'onHide' | 'clickHandler'>;
type HProductAttributesProps = {
	setPopupModal: Dispatch<SetStateAction<boolean>>;
} & PropsType;

const Wrapper = styled.div`
	width: 100%;
	display: block;

	.ItemImage {
		margin-top: -3.625rem;
		border-radius: 0.625rem;
	}

	.ItemPrice {
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0;
	}
`;

const SheetButton = styled.div`
	.AttrTitle {
		display: none;
	}

	ul {
		li.active {
			border-width: 1px;
			border-color: #ececec;
			box-shadow: none;
		}
	}
`;
