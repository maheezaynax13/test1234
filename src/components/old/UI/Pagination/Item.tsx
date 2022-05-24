import styled from 'styled-components';

const Item = ({ isOptional, isActive, children, clickHandler, ...rest }: propsType): JSX.Element => (
	<li className="ml-1 mr-1">
		<PaginationItem
			className={`${isOptional ? ' alt' : ''}${isActive ? ' active' : ''}`}
			onClick={clickHandler}
			{...rest}
		>
			{children}
		</PaginationItem>
	</li>
);

export default Item;

interface propsType {
	isActive?: boolean;
	isOptional?: boolean;
	disabled?: boolean;
	children: number | string;
	clickHandler: () => void;
}

const PaginationItem = styled.button`
	width: 34px;
	height: 34px;
	border-radius: 100%;
	color: #707070;
	padding: 0;
	border: 0;
	background-color: transparent;

	&:hover {
		background-color: #e9ecef;
	}

	&.active {
		color: var(--white);
		background-color: var(--primary);
	}

	&:disabled {
		&:hover {
			background-color: transparent;
		}
	}

	&.alt {
		width: auto;
		height: 34px;
		color: var(--primary);
	}
`;
