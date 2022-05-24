import { FormHeader, SigninForm } from '@components/old/parts/Auth';
import { CardWithShadow } from '@components/old/UI';
import { withoutAuth } from '@libs/hoc';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Signin: NextPage = () => {
	useEffect(() => {
		const body = document.querySelector('body');
		body.style.backgroundColor = '#fafafa';

		return () => {
			body.style.backgroundColor = '';
		};
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Sign In - zDrop</title>
			</Head>

			<Container>
				<Row>
					<Col>
						<PageWrap>
							<FormWrap>
								<CardWithShadow className="w-100 d-block mt-0">
									<FormHeader title="Please, Sign in" />
									<SigninForm />
								</CardWithShadow>
							</FormWrap>
						</PageWrap>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default withoutAuth(Signin);

const PageWrap = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FormWrap = styled.div`
	width: 325px;
	display: block;
`;
