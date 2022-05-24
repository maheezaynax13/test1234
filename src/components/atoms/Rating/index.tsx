import Icon, { star } from '@libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

const Rating: FC = () => {
	return (
		<Wrapper>
			<div className="d-flex align-items-center">
				<h6 className="Rating">4</h6>
				<Icon path={star} width={14} height={13} fill="var(--white)" className="ml-1 p-0" />
			</div>
		</Wrapper>
	);
};

export default Rating;

const Wrapper = styled.div`
	display: inline-block;
	background-color: var(--primary);
	padding: 0.224rem;
	border-radius: 2px;
	.Rating {
		color: var(--white);
		margin: 0;
		padding: 0;
	}
`;
