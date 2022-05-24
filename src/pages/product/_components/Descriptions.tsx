import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

const Descriptions: FC<PropsType> = ({ data }) => <DetailModuleHtml dangerouslySetInnerHTML={{ __html: data }} />;

export default Descriptions;

interface PropsType {
	data: ISingleProduct['longDescription'];
}

const DetailModuleHtml = styled.div`
	& > * {
		font-family: var(--font-family-sans-serif) !important;
	}
`;
