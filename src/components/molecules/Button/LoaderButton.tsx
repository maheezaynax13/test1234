import { Button, ButtonProps } from '@components/atoms';
import { FC, Fragment } from 'react';
import { Spinner } from '../Loaders';

export const LoaderButton: FC<LoaderButtonProps> = ({ isActive, children, ...rest }) => {
	const btnProps = { disabled: isActive ? isActive : rest.disabled, ...rest };

	return (
		<Button {...btnProps}>
			{isActive ? (
				<div className="d-flex align-items-center justify-content-center">
					<Spinner className="mr-2" /> Please wait...
				</div>
			) : (
				<Fragment>{children}</Fragment>
			)}
		</Button>
	);
};

export interface LoaderButtonProps extends ButtonProps {
	isActive?: boolean;
}

LoaderButton.defaultProps = {
	isActive: false,
};
