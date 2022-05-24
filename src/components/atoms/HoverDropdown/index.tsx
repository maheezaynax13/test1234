import Icon, { arrowLineDown } from '@libs/icons';
import Link from 'next/link';
import { FC, useState } from 'react';
import { DropdownWrapper, Menu } from './style';

type PropsType = {
	data: any;
};

export const HoverDropdown: FC<PropsType> = (props) => {
	const { label, childData, slug } = props.data;

	const [isMenuShow, setIsMenuShow] = useState<boolean>(false);

	const handleShowMenu = () => {
		setIsMenuShow(true);
	};
	const handleCloseMenu = () => {
		setIsMenuShow(false);
	};

	return (
		<DropdownWrapper onMouseEnter={handleShowMenu} onMouseLeave={handleCloseMenu}>
			<div className="position-relative">
				<h6>
					{label} {childData && <Icon path={arrowLineDown} />}
				</h6>
			</div>
			{isMenuShow && childData && (
				<Menu>
					{childData?.map((el) => (
						<>
							<h6 className="mb-2">{el?.label}</h6>
							{el?.innerChild &&
								el?.innerChild.map((innerChildData, i) => (
									<div key={i} className="InnerChild mb-1">
										<Link href={innerChildData?.slug}>{innerChildData?.label}</Link>
									</div>
								))}
						</>
					))}
				</Menu>
			)}
		</DropdownWrapper>
	);
};
