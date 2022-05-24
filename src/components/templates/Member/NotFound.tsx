/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

export const NotFound: FC = ({ children }) => (
	<div className="w-100 text-center py-5">
		<p className="font-weight-semibold mb-1">Hey, it feels so light!</p>
		<p style={{ color: 'var(--light-gray)' }}>{children}</p>
	</div>
);
