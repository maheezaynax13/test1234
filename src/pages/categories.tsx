import { CategoryList, CategoryListProps } from '@components/templates';
import { productAPI } from '@libs/api';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Categories: NextPage<CategoryListProps> = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Categories - zDrop</title>
			</Head>
			<CategoryList {...props} />
		</Fragment>
	);
};

Categories.getInitialProps = async (ctx: NextPageContext): Promise<CategoryListProps> => {
	const { isMobile } = ctx;
	if (isMobile) {
		try {
			const { success, data: parent } = await productAPI.getHParentCats();
			if (success) {
				const id = parent?.[0]?.categoryID;
				if (id) {
					try {
						const { success, data: child } = await productAPI.getHChildCats(id);
						if (success) return { parent, child };
						throw new Error();
					} catch (error) {
						return { parent, child: null };
					}
				}
				return { parent, child: null };
			}
			throw new Error();
		} catch (error) {
			return { parent: null, child: null };
		}
	}

	serverRedirect('/404', ctx);
	return { parent: null, child: null };
};

export default Categories;
