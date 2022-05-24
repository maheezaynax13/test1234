import { Button, Image, Link } from '@components/atoms';
import { productAPI } from '@libs/api';
import { IProduct } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ViewedNavbar: FC<PropsType> = ({ onHide }) => {
	const [recentProduct, setRecentProduct] = useState<IProduct[]>(null);
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const { success, data } = await productAPI.getRecentProduct();
			if (success) setRecentProduct(data);
		})();
	}, []);

	if (!!recentProduct) {
		return (
			<Wrapper>
				<Row>
					<Col>
						<p className="font-weight-semibold text-secondary ">Viewed</p>
					</Col>
					<Col className="text-right">
						<Button
							variant="link"
							className="text-secondary p-0"
							onClick={() => {
								onHide();
								router.push('/member/recently-viewed');
							}}
						>
							View All
						</Button>
					</Col>
					<Col xs={12}>
						<Row>
							{recentProduct.map(({ slug, image: { imageURL } }, i) => (
								<Col xs={3} key={i}>
									<Link href={`/product/${slug}`} onClick={onHide} className="d-block text-center">
										<Image src={imageURL} height={75} width={75} style={{ borderRadius: '7px' }} />
									</Link>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Wrapper>
		);
	} else {
		return null;
	}
};

interface PropsType {
	onHide?: () => void;
}

const Wrapper = styled.div`
	width: calc(100% - 2rem);
	display: block;
	margin: 1rem;
	padding: 0.5rem;
	border-bottom: 1px solid var(--border);
`;
