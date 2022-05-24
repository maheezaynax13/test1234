import { FC } from 'react';
import styled from 'styled-components';

const Comment: FC = () => {
	return (
		<div>
			<h6>Comments</h6>
			<TextArea placeholder="(Optional)" />
		</div>
	);
};

export default Comment;

const TextArea = styled.textarea`
	width: 100%;
	min-height: 100px;
	resize: none;
	overflow: auto;
	background: #fafafa;
	border-radius: 5px;
	border: 1px solid #ececec;
	padding: 9px;
`;
