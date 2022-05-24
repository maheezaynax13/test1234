import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Link } from '@components/atoms';
import Icon, { checkboxCircle } from '@libs/icons';
import { ICart } from '@libs/api/interfaces';

export const StoreInfo: FC<StoreInfoProps> = (props) => {
	const { imageURL, isVerified, shopID, name, fulfilledBy } = props;

	return (
		<div className="d-flex align-items-center">
			<Avatar src={imageURL} alt={name} />
			{name && (
				<Wrapper>
					<div className="d-flex align-items-center">
						<Link href={`/shop/${shopID}`} className="Title">
							{name}
						</Link>
						<Icon
							path={checkboxCircle}
							width={16}
							height={16}
							fill={isVerified ? 'var(--blue)' : 'var(--light-gray)'}
						/>
					</div>
					{fulfilledBy && <p className="text-light-gray mb-0">Fullfilled by {fulfilledBy}</p>}
				</Wrapper>
			)}
		</div>
	);
};

export type StoreInfoProps = ICart['packages'][0]['shopInfo'] & Pick<ICart['packages'][0], 'fulfilledBy'>;

const Wrapper = styled.div`
	display: block;
	margin-left: 0.5rem;

	.Title {
		color: var(--dark);
		font-weight: 600;
		margin: 0 3px 0 0;
	}
`;
