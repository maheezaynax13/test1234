import { Image } from '@components/atoms';
import { LoaderButton } from '@components/molecules';
import Icon, { camera, closeCircleFill } from '@libs/icons';
import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SingleImage: FC<SingleImageProps> = ({ data, onClick }) => (
	<Item>
		<Icon width={15} height={15} fill="#B5B5B5" path={closeCircleFill} onClick={onClick} />
		<Image src={data} />
	</Item>
);

const UploadImages: FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const uploadBtn = useRef<HTMLInputElement>(null);
	const [images, setImages] = useState([]);

	const handleRemoveImage = (el) => {
		const index = images.indexOf(el);
		if (index > -1) {
			images.splice(index, 1);
			setImages([images]);
		}
	};

	const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				const newImage = reader.result;
				if (images.length < 3) {
					setImages([...images, newImage]);
				}
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	return (
		<Row className="w-100 ">
			<Col>
				<h6>Upload Pictures *</h6>
				<p style={{ color: '#B5B5B5' }}>
					Take a picture of the package,product,invoice and related screenshots.
				</p>
				<Row>
					<Col>
						<div className="my-3">
							<Row className="align-items-center justify-content-start">
								<Col md="auto">
									<div className="d-flex align-items-center justify-content-between">
										{images.map((el, i) => {
											console.log(el);
											return (
												<SingleImage key={i} data={el} onClick={() => handleRemoveImage(el)} />
											);
										})}
									</div>
								</Col>
								<Col md={4} className="text-right">
									<BtnWrapper>
										{images.length < 3 && (
											<UploadBtn
												block
												variant="light"
												isActive={loading}
												disabled={images.length === 3}
												onClick={() => uploadBtn.current.click()}
											>
												<Icon path={camera} width={14} height={14} />
												<div style={{ color: '#B5B5B5' }}>({images?.length}/3)</div>
											</UploadBtn>
										)}
										<input
											type="file"
											className="d-none"
											accept="image/*"
											ref={uploadBtn}
											onChange={handlePhotoUpload}
										/>
									</BtnWrapper>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default UploadImages;

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
	width: 5.55rem;
	height: 5.55rem;
	border: 1px dashed #ececec;
	color: #4d4d4d;
	background-color: white;
	font-weight: 500;
`;

const Item = styled.div`
	position: relative;
	width: 5.55rem;
	height: 5.55rem;
	border: 1px solid #ececec;
	background-color: #fafafa;
	border-radius: 4px;
	margin-right: 1.1rem;

	& > svg {
		position: absolute;
		top: -9px;
		right: -9px;

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
