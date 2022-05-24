import { FC, useEffect } from 'react';
import styled from 'styled-components';

export const Maintenance: FC = () => {
	useEffect(() => {
		document.body.style.backgroundColor = 'var(--white)';

		return () => {
			document.body.style.backgroundColor = 'transparent';
		};
	});

	return (
		<Wrapper className="box" style={{ textAlign: 'center' }}>
			<div>
				<img src="https://cdn.zdrop.com.bd/cms_images/logo-540.jpg" />
				<h3>THIS SITE IS UNDER MAINTENANCE... &#129327;</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	&.box {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100vh;
		align-items: center;
		justify-items: center;
	}
	h3 {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 500;
		letter-spacing: 1.5px;
	}
`;
