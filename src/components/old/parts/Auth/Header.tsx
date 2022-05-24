import { Button } from 'react-bootstrap';
import { Brand } from '@components/molecules';
import { Fragment } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Header = ({ title }: propsType): JSX.Element => {
	const router = useRouter();

	return (
		<Fragment>
			<div className="w-100 text-center pt-2">
				<Brand isClickable />
				<p className="mb-2 font-weight-semibold">{title}</p>
			</div>
			<TabList>
				<Button variant="link" active={router.route === '/register'} onClick={() => router.push('/register')}>
					Register
				</Button>
				<Button variant="link" active={router.route === '/signin'} onClick={() => router.push('/signin')}>
					Sign In
				</Button>
			</TabList>
		</Fragment>
	);
};

export default Header;

interface propsType {
	title: string;
}

const TabList = styled.div`
	display: flex;
	margin: 0 0 16px 0;
	padding: 0;
	border-bottom: 1px solid #dee2e6;

	button {
		position: relative;
		width: 50%;
		color: #515151;
		font-weight: 600;
		text-align: center;
		padding: 8px 0;
		border: 0;
		text-transform: uppercase;
		box-shadow: none;

		&:hover,
		&:focus {
			color: #515151;
			text-decoration: none;
			box-shadow: none;
		}

		&.active {
			color: var(--primary);

			&:after {
				position: absolute;
				left: 0;
				bottom: -1px;
				content: '';
				width: 100%;
				height: 4px;
				display: block;
				background-color: #00b55b;
				border-radius: 20px 20px 0 0;
			}
		}
	}
`;
