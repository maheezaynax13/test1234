import { Fragment } from 'react';
import styled from 'styled-components';

const Header = ({ region, city, area }: propsType): JSX.Element => {
	return (
		<Heading>
			{region ? (
				<Fragment>
					<span>{region}</span> -{' '}
					{city ? (
						<Fragment>
							<span>{city}</span> - {area ?? 'Select Area'}
						</Fragment>
					) : (
						'Select City'
					)}
				</Fragment>
			) : (
				'Select Region'
			)}
		</Heading>
	);
};

export default Header;

interface propsType {
	region: string;
	city: string;
	area: string;
}

const Heading = styled.p`
	color: var(--secondary);
	padding: 12px 15px 0 15px;
	margin: 0;
`;
