import { Image } from '@components/atoms';
import { LoaderButton } from '@components/molecules';
import { productAPI } from '@libs/api';
import Icon, { closeCircleFill } from '@libs/icons';
import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SingleImage: FC<SingleImageProps> = ({ data, onClick }) => (
	<Item>
		<Icon
			width={15}
			height={15}
			fill="var(--danger)"
			path={closeCircleFill}
			onClick={onClick}
			// style={{ backgroundColor: 'white', borderRadius: '50%' }}
		/>
		<Image src={data} />
	</Item>
);

export const ReviewImage: FC<PropsType> = ({ data, setImageURL }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const uploadBtn = useRef<HTMLInputElement>(null);

	const handlePhotoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files.length > 0) {
			try {
				setLoading(true);
				const { success, data } = await productAPI.uploadImage(files[0]);
				if (success) setImageURL((prevState) => [...prevState, data]);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		}
	};
	const handleRemoveImage = (index: number) => {
		setImageURL((prevState) => {
			const newArr = prevState.filter((_, i) => i !== index);
			return newArr;
		});
	};

	return (
		<div className="my-3">
			<p className="mb-2">Upload Photo</p>

			<Row className="align-items-center justify-content-between">
				<Col md={8}>
					<div className="d-flex align-items-center justify-content-between">
						{data.map((el, i) => (
							<SingleImage key={i} data={el} onClick={() => handleRemoveImage(i)} />
						))}
						{Array(3 - data.length)
							.fill('')
							.map((_, i) => (
								<Item key={i} />
							))}
					</div>
				</Col>
				<Col md={4} className="text-right">
					<BtnWrapper>
						<UploadBtn
							block
							variant="light"
							isActive={loading}
							disabled={data.length === 3}
							onClick={() => uploadBtn.current.click()}
						>
							Upload Photos
						</UploadBtn>
						<input
							type="file"
							className="d-none"
							accept="image/*"
							ref={uploadBtn}
							onChange={handlePhotoUpload}
						/>
						<span className="uploadCount">{data.length}/3</span>
					</BtnWrapper>
				</Col>
			</Row>
		</div>
	);
};

interface PropsType {
	data: string[];
	setImageURL: Dispatch<SetStateAction<string[]>>;
}

interface SingleImageProps {
	data: string;
	onClick: () => void;
}

const BtnWrapper = styled.div`
	position: relative;

	.uploadCount {
		position: absolute;
		font-size: 0.775rem;
		top: 2.6rem;
		right: 0;
	}
`;

const UploadBtn = styled(LoaderButton)`
	color: #4d4d4d;
	border: 1px solid #4d4d4d;
	background-color: white;
	font-weight: 500;
`;

const Item = styled.div`
	position: relative;
	width: 5.55rem;
	height: 5.55rem;
	border-radius: 0.765rem;
	background-color: #fafafa;
	border: 1px solid #ececec;

	& > svg {
		position: absolute;
		top: 5px;
		right: 3px;

		&:hover {
			cursor: pointer;
		}
	}
	& > img {
		width: 5.55rem;
		height: 5.55rem;
		object-fit: cover;
		border-radius: 0.765rem;
	}
`;
