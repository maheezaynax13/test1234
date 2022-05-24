import { CardBody } from '@components/atoms';
import { StoreInfo } from '@components/organisms/Store';
import { IAllOrders } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const PackageHeader: FC<PackageHeaderProps> = (props) => {
	const { shopInfo, fulfilledby, packageName } = props;

	return (
		<Wrapper>
			<Row className="align-items-center">
				<Col>
					<StoreInfo {...shopInfo} fulfilledBy={fulfilledby} />
				</Col>
				<Col md="auto" className="text-right">
					<PackageCount>{packageName?.replace(/PACK_/, 'Package ')}</PackageCount>
				</Col>
			</Row>
		</Wrapper>
	);
};

export type PackageHeaderProps = Pick<
	IAllOrders['items'][0]['packages'][0],
	'shopInfo' | 'fulfilledby' | 'packageName'
>;

export const PackageCount = styled.span`
	display: inline-block;
	color: var(--white);
	padding: 0.5rem 1.2rem;
	margin-right: -1rem;
	border-radius: 2rem 0 0 2rem;
	background-color: var(--dark);
`;

const Wrapper = styled(CardBody)`
	@media (max-width: 767.99px) {
		.row {
			flex-wrap: nowrap;

			.Title {
				max-width: 8.5rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			& > :nth-child(2) {
				width: 6.5rem;
			}
			${PackageCount} {
				padding: 0.5rem 0.75rem;
			}
		}
	}
`;
