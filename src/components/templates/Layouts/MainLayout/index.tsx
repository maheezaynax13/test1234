import { AuthPopup } from '@components/old/parts/Auth';
import { MainFooter, NewHeader } from '@components/organisms';
import { FC, Fragment, useState } from 'react';
import { IDefaultProps } from '../interfaces';
import { HandheldMainLayout } from './Handheld';

export const MainLayout: FC<IDefaultProps> = ({ isMobile, children }) => {
	const [showTrackForm, setTrackForm] = useState<boolean>(false);

	if (isMobile) return <HandheldMainLayout>{children}</HandheldMainLayout>;

	return (
		<Fragment>
			<NewHeader />
			<AuthPopup />
			{/* <TrackOrderPopup isActive={showTrackForm} onHide={() => setTrackForm(false)} /> */}
			{/* <LowerHeader setTrackForm={() => setTrackForm(true)} /> */}
			<main>{children}</main>
			<MainFooter />
		</Fragment>
	);
};

