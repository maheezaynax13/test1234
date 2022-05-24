import { Button, Image } from '@components/atoms';
import { FC } from 'react';
import styled from 'styled-components';

export const ServerError: FC = () => {
	return (
		<Wrapper>
			<div className="Inner">
				<Image
					src="https://lh3.googleusercontent.com/proxy/G7XdtWuLD9EyzwIspO8jX1m0Z8e4VsXuQLhCi7jlXEE2fNpuyDMSdPKEFXyPDbTKIdCjLtc4c0xpfQzfvALzEihg7yWLlpGLd0iWbA6-A0eyIL1eGA"
					alt="Server Error"
				/>
				<h5>Slow or no Internet Connection</h5>
				<p>Check your internet connection and try again.</p>

				<Button pill variant="dark">
					Try again
				</Button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	min-height: calc(100vh - 56px);
	display: flex;
	align-items: center;
	justify-content: center;

	.Inner {
		margin-top: -56px;
		text-align: center;

		img {
			width: 200px;
			height: 150px;
			margin-bottom: 1rem;
		}
		h5,
		p {
			color: #999999;
		}
		button {
			width: 9.375rem;
			background-color: #2b2b2b;
		}
	}
`;
