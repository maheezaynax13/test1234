import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-bottom: 15px;
`;

export const Title = styled.span`
	font-weight: 500;
`;

export const QtyWrap = styled.div`
	overflow: hidden;
	width: 100px;
	height: 38px;
	line-height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ececec;
`;

export const Button = styled.button`
	min-width: 32px;
	height: calc(100% + 5px);
	color: var(--dark);
	font-size: 22px;
	font-weight: 500;
	border: 0;
	padding: 0;
	margin-top: -5px;
	background-color: transparent;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;

		&:hover {
			background-color: transparent;
		}
	}
`;

export const CountText = styled.div`
	width: 100%;
	text-align: center;
`;

export const StockAvailable = styled.span`
	color: var(--gray);
	margin-left: 10px;
`;
