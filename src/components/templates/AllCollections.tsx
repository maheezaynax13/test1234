/* eslint-disable no-empty */
import { FullWidthBanner, LoaderButton } from '@components/molecules';
import { ProductCollectionList } from '@components/organisms';
import { collectionAPI } from '@libs/api/collection';
import { ICollections } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const AllCollections: FC<ICollections> = (props) => {
	const [items, setItems] = useState(initialState);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { query } = useRouter();

	useEffect(() => setItems(props), [props]);

	const getCollections = async (page: number) => {
		const params = { ...query };
		params.pageNum = page.toString();
		setLoading(true);

		try {
			const { success, data } = await collectionAPI.getCollections(params);
			if (success) {
				setItems((prevState) => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { banner, items, ...rest } = data;
					const newObj = { ...prevState };
					if (rest.pageNumber > prevState.pageNumber) {
						newObj.items = [...newObj.items, ...items];
						for (const [key, value] of Object.entries(rest)) {
							if (key in newObj) newObj[key] = value;
						}
					}

					return newObj;
				});
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const { banner, items: products, pageNumber, totalPages } = items;

	return (
		<Container>
			<Row>
				<Col>
					{banner && <FullWidthBanner src={banner.imageURL} alt={banner.altText} />}

					<ProductCollectionList xs={6} md={2} items={products} />

					{pageNumber < totalPages && (
						<LoaderButton
							pill
							outline
							variant="dark"
							isActive={isLoading}
							onClick={() => getCollections(pageNumber + 1)}
						>
							LOAD MORE
						</LoaderButton>
					)}
				</Col>
			</Row>
		</Container>
	);
};

const initialState = {
	banner: null,
	items: [],
	total: 0,
	totalPages: 0,
	nextPage: 0,
	pageNumber: 0,
};
