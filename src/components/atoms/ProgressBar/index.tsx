import { FC, HTMLAttributes } from 'react';
import { Variant } from '../interfaces';
import { ProgressInner, ProgressWrapper } from './styles';

export const ProgressBar: FC<ProgressBarProps> = ({ variant, now, label, srOnly, ...rest }) => {
	const progressProps = { now, variant, children: !srOnly ? label : null };

	return (
		<ProgressWrapper {...rest}>
			<ProgressInner {...progressProps} />
		</ProgressWrapper>
	);
};

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
	now: number;
	variant?: Exclude<Variant, 'success' | 'light'>;
	label?: string;
	srOnly?: boolean;
}

ProgressBar.defaultProps = {
	now: 0,
	variant: 'primary',
	srOnly: false,
};
