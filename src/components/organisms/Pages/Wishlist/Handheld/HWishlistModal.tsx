import { Modal, ModalBody } from '@components/atoms';
import { BottomSheet, BottomSheetProps } from '@components/molecules';
import { IWishlistItem } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

export const HWishlistModal: FC<PropsType> = ({ attributes, ...rest }) => {
	return (
		<Wrapper>
			<BottomSheet {...rest}></BottomSheet>
		</Wrapper>
	);
};

type PropsType = Pick<IWishlistItem, 'attributes'> & BottomSheetProps;

const Wrapper = styled.div``;
