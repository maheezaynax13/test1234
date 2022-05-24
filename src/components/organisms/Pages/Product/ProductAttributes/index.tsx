import { ISingleProduct } from '@libs/api/interfaces';
import { getProductState, updatePrice, updateSKUData, updateStock } from '@store/actions';
import { FC, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListItems, Title, Wrap } from './styles';

export const ProductAttributes: FC<ProductAttributesProps> = ({ attributes, stock, clickHandler }) => {
	const [selected, setSelected] = useState<Record<string, string>>(null);
	const { globalSKU, price } = useSelector(getProductState);
	const dispatch = useDispatch();
	const { variants } = stock;

	if (variants?.length > 0) {
		useEffect(() => {
			const item = variants.find((e) => e.skuID === globalSKU);
			if (item?.attributes) setSelected(item.attributes);
		}, [variants, globalSKU]);

		useEffect(() => {
			stock.variants.forEach((e) => {
				if (JSON.stringify(e.attributes) === JSON.stringify(selected)) {
					dispatch(updateSKUData(e.skuID));
					dispatch(updateStock(e.stockRemaining));
					dispatch(updatePrice({ ...price, current: e.price, old: e.oldPrice }));
				}
			});
		}, [selected]);

		const map: Record<string, ProductAttributesProps['attributes']> = {};
		attributes.map((el) => {
			if (!map[el.name]) {
				map[el.name] = [];
			}
			map[el.name].push(el);
		});

		const handleClick = (data: ProductAttributesProps['attributes'][0]) => {
			const { name, value, hasImage, imageURL } = data;
			setSelected((prevState) => {
				if (prevState) {
					const newObj = { ...prevState };
					newObj[name] = value;
					return newObj;
				}
				return { [name]: value };
			});
			if (hasImage) clickHandler(imageURL);
		};

		if (map && Object.keys(map).length > 0) {
			return (
				<Wrap>
					{Object.entries(map).map(([key, value], i) => (
						<Container key={i}>
							<Title className="AttrTitle">
								{key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
								<span className="font-weight-normal text-secondary">{selected?.[key]}</span>{' '}
							</Title>
							<ListItems>
								{value.map(({ value: attrValue, imageURL }, index, arr) => {
									return (
										<li
											key={index}
											className={selected?.[key] === attrValue ? ' active' : ''}
											onClick={() => handleClick(arr[index])}
										>
											{imageURL?.small ? (
												<Image fluid src={imageURL.small} alt={attrValue} />
											) : (
												<span>{attrValue}</span>
											)}
										</li>
									);
								})}
							</ListItems>
						</Container>
					))}
				</Wrap>
			);
		}

		return null;
	}

	return null;
};

type PropsType = {
	clickHandler?: (data: ISingleProduct['attributes'][0]['imageURL']) => void;
};
type ProductAttributesProps = PropsType & Pick<ISingleProduct, 'attributes' | 'stock'>;
