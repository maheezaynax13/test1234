import { MoreLink, SectionHeader } from '@components/old/styles/productStyles';
import Link from 'next/link';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

const BlockHeader: FC<PropsType> = ({ icon, header, subHeader, viewMore }) => (
	<Col md={12} style={{ marginBottom: '1rem' }}>
		<Row className="align-items-center">
			<Col xs={8}>
				<SectionHeader>
					<img src={icon} alt="" width={24} height={24} /> {header}
					{subHeader && <small className="ml-2 text-lowercase">{subHeader}</small>}
				</SectionHeader>
			</Col>

			<Col xs={4} className="text-right">
				{viewMore && (
					<MoreLink>
						<Link href={viewMore}>
							<a>View More</a>
						</Link>
					</MoreLink>
				)}
			</Col>
		</Row>
	</Col>
);

export default BlockHeader;

interface PropsType {
	icon: string;
	header: string;
	subHeader?: string;
	viewMore?: string;
}
