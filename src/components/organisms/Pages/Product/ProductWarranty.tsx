import { Image } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { ISingleProduct } from '@libs/api/interfaces';
import { information } from '@libs/icons';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ProductWarranty: FC<ProductWarrantyProps> = (props) => {
	const { availableReturnDays, hasWarranty } = props;

	return (
		<Wrap>
			<Image src="/images/warranty-n-return.svg" height={30} style={{ marginTop: '-2px' }} alt="van" />

			<Col>
				<Title>
					{/* <Icon path={itemReturn} width={22} height={22} fill="#2B2B2B" />  */}
					Return &amp; Warranty
				</Title>
				<TextWrap>
					<span className="text-secondary">{availableReturnDays} Days Return Policy</span>
					<IconButton
						title={`${availableReturnDays} Days Return Policy`}
						className="ml-1"
						path={information}
						height={18}
						width={18}
					/>
					<span className="text-secondary ml-4">{!hasWarranty && 'No'} Warranty Available</span>
					<IconButton
						title={`${!hasWarranty && 'No'} Warranty Available`}
						className="ml-1"
						path={information}
						height={18}
						width={18}
					/>
				</TextWrap>
			</Col>
		</Wrap>
	);
};

type ProductWarrantyProps = ISingleProduct['policies'];

const Wrap = styled(Row)`
	margin-bottom: 15px;
`;

const Title = styled.p`
	font-weight: 600;
	margin-bottom: 3px;
`;

const TextWrap = styled.div`
	width: 100%auto;
	display: block;
`;
