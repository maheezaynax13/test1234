import { Button, FormInput, Image } from '@components/atoms';
import { productAPI } from '@libs/api';
import Router from 'next/router';
import React, { FC, useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { GotItBadge } from './GotItBadge';
import { ReviewImage } from './ReviewImage';
import { StarRating } from './StarRating';

export const ReviewPopup: FC<PropsType> = ({ isActive, productID, skuID, onHide, ...rest }) => {
	const [rating, setRating] = useState(0);
	const [imageURL, setImageURL] = useState<string[]>([]);
	const [review, setReview] = useState<string>('');
	const [errValidation, setErrValidation] = useState<string>(null);

	const submitReview = async () => {
		const payload = {
			productID,
			skuID,
			rating,
			review,
			imageURL,
			likeCount: [],
			disLikeCount: [],
		};
		try {
			const { success, message } = await productAPI.addProductReview(payload);
			if (success) {
				onHide();
				setRating(0);
				setImageURL([]);
				setReview('');
				setErrValidation(null);
				Router.push(Router.asPath, undefined, { scroll: false });
			} else {
				setErrValidation(message.toString());
				setTimeout(() => setErrValidation(null), 5000);
			}
		} catch (error) {}
	};

	const isValid = (): boolean => {
		if (review.length > 500) {
			return true;
		}
	};

	return (
		<Modal centered show={isActive} onHide={onHide}>
			<Header closeButton className="py-2" style={{ backgroundColor: '#FAFAFA' }}>
				<Row className="w-100">
					<Col md={2}>
						<Image src={rest.imageURL} style={{ height: '4rem', width: '3.625rem', objectFit: 'cover' }} />
					</Col>
					<Col>
						<p className="mb-2 mr-3">{rest.name}</p>
					</Col>
				</Row>
			</Header>
			<Modal.Body>
				<GotItBadge />

				<StarRating count={5} value={rating} changeHandler={(value) => setRating(value)} />

				<FormInput
					srOnly
					rows={4}
					as="textarea"
					className="mt-3 mb-1"
					placeholder="Describe your experience (optional)"
					value={review}
					message="Review must be less than 500 word"
					onChange={(e) => setReview(e.target.value)}
					required={isValid()}
				/>
				<p style={{ fontSize: '0.775rem', textAlign: 'right' }}>{review.length}/500</p>

				<hr style={{ margin: '0 -1rem' }} />

				<ReviewImage data={imageURL} setImageURL={setImageURL} />

				<hr style={{ margin: '0 -1rem' }} />

				<div className="text-right">
					{errValidation && <span className="text-danger mr-2">{errValidation}</span>}
					<Button pill className="mt-3 py-2 px-3" disabled={isValid()} onClick={submitReview}>
						Post My Review
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

interface PropsType {
	isActive: boolean;
	name: string;
	skuID: string;
	productID: string;
	imageURL: string;
	onHide: () => void;
}

const Header = styled(Modal.Header)`
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
`;
