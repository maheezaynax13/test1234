import { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '@libs/hooks';

export const MoreLoader = ({ onVisible }: { onVisible: () => void }): JSX.Element => {
	const ref = useRef(null);
	useOnScreen(ref, onVisible);

	return <LoaderGIF ref={ref} />;
};

const LoaderGIF = styled.div`
	width: 100%;
	height: 200px;
	background: url('/images/load-more.gif') no-repeat 50%;
`;
