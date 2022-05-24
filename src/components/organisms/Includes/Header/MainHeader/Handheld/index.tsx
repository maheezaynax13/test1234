import { HandheldHeroSearch, IconButton } from '@components/molecules';
import { productAPI } from '@libs/api';
import { arrowLeft, bell, menu } from '@libs/icons';
import { getAppState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, Fragment, KeyboardEvent, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { HandheldHeader } from '../../styles';
import { SidebarNotifications } from './SidebarNotifications';
import { SideNavbar } from './SideNavbar';

const initialSearch = { isActive: false, keywords: '', data: [] };
export const HandheldMainHeader: FC = () => {
	const [isSidebar, setSidebar] = useState<'navbar' | 'notification'>(null);
	const [search, setSearch] = useState<typeof initialSearch>(initialSearch);
	const { notifications, notificationCount } = useSelector(getAppState);
	const router = useRouter();

	const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleClick(search.keywords);
	};

	const getSearchData = async (e: string) => {
		if (e) {
			try {
				const { success, data: res } = await productAPI.getSearchSuggestions(e);
				if (success) setSearch((prevState) => ({ ...prevState, data: res.search }));
			} catch (error) {}
		}
	};

	const handleClick = (value: string) => {
		if (value) {
			setSidebar(null);
			setSearch(initialSearch);
			router.push(`/search?query=${value}`);
		}
	};

	return (
		<Fragment>
			<HandheldHeader>
				<Container>
					<Row className="align-items-center">
						<Col xs="auto">
							{search.isActive ? (
								<IconButton path={arrowLeft} onClick={() => setSearch(initialSearch)} />
							) : (
								<IconButton path={menu} onClick={() => setSidebar('navbar')} />
							)}
						</Col>
						<Col>
							<HandheldHeroSearch
								data={search}
								onKeyUp={handleSearch}
								onClickHandler={handleClick}
								onSearch={() => setSearch((prevState) => ({ ...prevState, isActive: true }))}
								onChange={({ target: { value } }) => {
									setSearch((prevState) => ({ ...prevState, keywords: value }));
									getSearchData(value);
								}}
							/>
						</Col>
						<Col xs="auto">
							<IconButton
								path={bell}
								count={notificationCount}
								isCount={notificationCount > 0}
								onClick={() => setSidebar('notification')}
							/>
						</Col>
					</Row>
				</Container>
			</HandheldHeader>
			<SidebarNotifications isActive={isSidebar === 'notification'} onHide={() => setSidebar(null)} />
			<SideNavbar isActive={isSidebar === 'navbar'} onHide={() => setSidebar(null)} />
		</Fragment>
	);
};
