import { ImageLoader } from '@components/molecules';
import { ImageListItems } from '@components/old/styles/productStyles';
import { ISingleProductImage } from '@libs/api/interfaces';
import Icon, { youtube } from '@libs/icons';
import { getAppState } from '@store/actions';
import { FC, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageGallery: FC<ImageGalleryProps> = (props) => {
	const { isLoading, data, activeItem, disableLoader, updateHandler } = props;
	const [styleProp, setStyleProp] = useState({ scale: 1, originX: 0, originY: 0 });
	const { isMobile } = useSelector(getAppState);

	if (activeItem) {
		return (
			<SliderWrap>
				<Container>
					<ImageLoader isLoading={isLoading} />
					{activeItem?.isVideo ? (
						<iframe
							width="100%"
							height="100%"
							onLoad={disableLoader}
							style={{ border: 'none', borderRadius: '10px' }}
							src={`https://www.youtube.com/embed/${activeItem.big.split('=', 2)[1]}?autoplay=1&mute=1`}
						></iframe>
					) : (
						<Image
							fluid
							src={activeItem.big}
							alt=""
							style={{
								transform: `scale(${styleProp.scale})`,
								transformOrigin: `${styleProp.originX}px ${styleProp.originY}px`,
							}}
							onMouseEnter={() => {
								if (!isMobile) setStyleProp({ ...styleProp, scale: 2 });
							}}
							onMouseLeave={() => {
								if (!isMobile) setStyleProp({ ...styleProp, scale: 1 });
							}}
							onMouseMove={(e) => {
								if (!isMobile) {
									setStyleProp({
										...styleProp,
										originX: e.nativeEvent.offsetX,
										originY: e.nativeEvent.offsetY,
									});
								}
							}}
							onLoad={disableLoader}
						/>
					)}
				</Container>

				{data && data.length > 0 && (
					<ImageListItems>
						{data.map((el, i) => (
							<li
								key={i}
								className={el.small === activeItem.small ? 'active' : ''}
								onMouseEnter={() => updateHandler(el)}
								onClick={() => updateHandler(el)}
							>
								{el.isVideo ? (
									<Icon path={youtube} fill="var(--danger)" width="100%" height="100%" />
								) : (
									<Image fluid src={el.small} alt="" />
								)}
							</li>
						))}
					</ImageListItems>
				)}
			</SliderWrap>
		);
	}

	return null;
};

export default ImageGallery;

interface ImageGalleryProps {
	data: ISingleProductImage[];
	activeItem: ISingleProductImage;
	isLoading: boolean;
	disableLoader: () => void;
	updateHandler: (el: ISingleProductImage) => void;
}

const SliderWrap = styled.div`
	width: 100%;
	display: block;
`;

const Container = styled.div`
	position: relative;
	overflow: hidden;
	height: 450px;
	margin-bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid #ececec;
`;
