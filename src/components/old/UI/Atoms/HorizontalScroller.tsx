import Icon, { arrowLeft, arrowRight } from '@libs/icons';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled, { CSSProperties } from 'styled-components';

const initialButton = { left: false, right: true };
const HorizontalScroller = ({ children, ...rest }: propsType): JSX.Element => {
	const [xAxis, setXaxis] = useState<number>(0);
	const [currPosition, setCurrPosition] = useState<number>(0);
	const [isOverflow, setOverflow] = useState<'hidden' | 'visible'>('visible');
	const [isButton, setButton] = useState<typeof initialButton>(initialButton);
	const previewRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const contentRef: MutableRefObject<HTMLDivElement> = useRef(null);

	useEffect(() => {
		if (contentRef.current?.clientWidth > 0) {
			setXaxis(contentRef.current?.clientWidth);
			setOverflow('hidden');
		}
	}, [contentRef]);

	const handlePrev = () => {
		const newPosition = currPosition - previewRef.current.clientWidth;
		if (newPosition > 0 && newPosition <= contentRef.current.clientWidth) {
			setCurrPosition(newPosition);
			setButton((prevState) => ({ ...prevState, left: true }));
		} else {
			setCurrPosition(0);
			setButton(initialButton);
		}
	};

	const handleNext = () => {
		const newPosition = currPosition + previewRef.current.clientWidth;
		if (newPosition <= contentRef.current.clientWidth) {
			if (newPosition + previewRef.current.clientWidth <= contentRef.current.clientWidth) {
				setCurrPosition(newPosition);
				setButton((prevState) => ({ ...prevState, left: true }));
			} else {
				setCurrPosition(contentRef.current.clientWidth - previewRef.current.clientWidth);
				setButton((prevState) => ({ ...prevState, right: false }));
			}
		}
	};

	const ScrollerContent = () => (
		<Content ref={contentRef} style={{ width: xAxis > 0 ? `${xAxis}px` : 'auto' }}>
			<PreviewChannel style={{ transform: `translateX(-${currPosition}px)` }}>{children}</PreviewChannel>
		</Content>
	);

	return (
		<Wrapper {...rest}>
			{isButton.left && (
				<Button variant="link" onClick={handlePrev}>
					<Icon path={arrowLeft} width={20} height={20} fill="#4D4D4D" />
				</Button>
			)}
			<div ref={previewRef} style={{ overflow: isOverflow }}>
				<ScrollerContent />
			</div>
			{isButton.right && (
				<Button variant="link" onClick={handleNext}>
					<Icon path={arrowRight} width={20} height={20} fill="#4D4D4D" />
				</Button>
			)}
		</Wrapper>
	);
};

export default HorizontalScroller;

interface propsType {
	children: JSX.Element | JSX.Element[];
	className?: string;
	style?: CSSProperties;
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	button {
		position: absolute;
		min-width: 40px;
		height: 100%;
		line-height: 10px;
		text-align: left;
		left: 0;
		top: 0;
		z-index: 99;
		border: 0;
		border-radius: 0;
		background-color: var(--white);
		background: linear-gradient(90deg, var(--white) 60%, transparent);

		&:first-child {
			padding-left: 0;
		}

		&:last-child {
			padding-right: 0;
			text-align: right;
			left: inherit;
			right: 0;
			background: linear-gradient(90deg, transparent, var(--white) 40%);
		}

		svg {
			opacity: 0.5;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}
`;

const Content = styled.div`
	white-space: nowrap;
	width: 100%;
	display: flex;
`;

const PreviewChannel = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	transition: transform 0.4s ease-in-out;
`;
