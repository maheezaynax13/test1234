import styled, { keyframes } from 'styled-components';

export const APILoader = ({ isActive }: propsType): JSX.Element => {
	if (isActive) {
		return (
			<Wrapper>
				<Container>
					<Spinner />
				</Container>
			</Wrapper>
		);
	}

	return null;
};

interface propsType {
	isActive: boolean;
}

const Wrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	width: 50px;
	height: 50px;
	margin: 100px auto 0;
	border: 5px solid #ececec;
	border-top: 5px solid var(--primary);
	animation: ${Spin} 1s linear infinite;
	border-radius: 50%;
`;
