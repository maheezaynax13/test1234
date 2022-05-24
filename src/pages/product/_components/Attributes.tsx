import { ImageListItems } from '@components/old/styles/productStyles';
import { ISingleProduct } from '@libs/api/interfaces';
import { getProductState, updateSKUData } from '@store/actions';
import { FC, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const Attributes: FC<PropsType> = ({ attributes, stock, clickHandler }) => {
	const [selected, setSelected] = useState<Record<string, string>>(null);
	const { globalSKU } = useSelector(getProductState);
	const dispatch = useDispatch();
	const { variants } = stock;

	if (variants && variants.length > 0) {
		useEffect(() => {
			const item = stock.variants.find((e) => e.skuID === globalSKU);
			if (item?.attributes) setSelected(item.attributes);
		}, [variants, globalSKU]);

		useEffect(() => {
			stock.variants.forEach((e) => {
				if (JSON.stringify(e.attributes) === JSON.stringify(selected)) dispatch(updateSKUData(e.skuID));
			});
		}, [selected]);

		const map: Record<string, PropsType['attributes']> = {};
		attributes.map((el) => {
			if (!map[el.name]) {
				map[el.name] = [];
			}
			map[el.name].push(el);
		});

		const handleClick = (data: PropsType['attributes'][0]) => {
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
							<Title>
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

export default Attributes;

interface PropsType extends Pick<ISingleProduct, 'attributes' | 'stock'> {
	clickHandler: (data: PropsType['attributes'][0]['imageURL']) => void;
}

const Wrap = styled.div`
	margin-bottom: 15px;
`;

const shaking = keyframes`
	0%, to {
		transform: translateZ(0);
	}
	10%, 30%, 50%, 70%, 90% {
		transform: translate3d(-3px, 0, 0);
	}
	20%, 40%, 60%, 80% {
		transform: translate3d(3px, 0, 0);
	}
`;

const Container = styled.div`
	position: relative;
	padding: 10px;
	margin-left: -10px;
	margin-bottom: 5px;
	border: 1px solid transparent;
	border-radius: 5px;

	&.isRequired {
		animation: ${shaking} 0.4s cubic-bezier(0, 0, 0.3, 1) 1;
		background: #fff7f8;
		border-color: #f0f0f0;

		p {
			color: var(--danger);
		}

		ul {
			li:not(:hover) {
				border-color: var(--danger);
			}
		}
	}
`;

const ListItems = styled(ImageListItems)`
	li {
		width: auto;
		height: auto;
		padding: 3px;
		opacity: 1;
		background-color: var(--white);
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;

		&:hover,
		&.active {
			box-shadow: inset 0 0 0 1px var(--primary);
		}

		img {
			width: 50px;
			height: 50px;
		}

		span {
			padding: 2px 10px;
			display: block;
		}
	}
`;

const Title = styled.p`
	font-weight: 500;
	margin-bottom: 8px;
`;
