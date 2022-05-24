import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

const MetaData: FC<PropsType> = ({ title, description }) => {
	const router = useRouter();
	const siteTitle = title + ' - zDrop';
	const pageURL = process.env.publicURL + router.pathname;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, minimum-scale=1, user-scalable=no" />

			{title && <title>{siteTitle}</title>}
			{description && <meta name="description" content={description} />}

			{/* Open Graph Data */}
			{title && <meta property="og:title" content={siteTitle} />}
			<meta property="og:url" content={pageURL} />
			<meta property="og:type" content="website" />
			{description && <meta property="og:description" content={description} />}
		</Head>
	);
};

export default MetaData;

interface PropsType {
	title?: string;
	description?: string;
}
