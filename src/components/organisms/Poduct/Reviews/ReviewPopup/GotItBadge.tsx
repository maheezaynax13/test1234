import { Button } from '@components/atoms';
import { BadgeLight } from '@components/molecules';
import { FC } from 'react';

export const GotItBadge: FC = () => {
	return (
		<BadgeLight rounded style={{ backgroundColor: '#F1FFF8', border: '1px solid #7ED5AA', lineHeight: '1.3' }}>
			<span className="d-block" style={{ color: '#4D4D4D', fontWeight: 550, fontSize: '0.765rem' }}>
				Reviews are public and editable
			</span>
			<span style={{ color: '#4D4D4D', fontSize: '0.725rem' }}>
				The name and photo on your zDrop Profile will with your review. Past edits are visible to users and the
				app developer unless you delete them.
			</span>
			<br />
			<Button variant="link" className="p-0 mt-1" style={{ fontSize: '0.765rem' }}>
				Got it
			</Button>
		</BadgeLight>
	);
};
