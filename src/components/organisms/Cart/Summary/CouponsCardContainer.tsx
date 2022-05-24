import { ICoupon } from '@libs/api/interfaces';
import Icon, { checkboxCircle } from '@libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

export const CouponsCardContainer: FC<PropsType> = (props) => {
	const { couponData, promoCode, clickHandler } = props;

	if (couponData) {
		return (
			<CardContainer>
				{couponData?.map((el, i) => {
					const { code, type, value, conditions, endDate } = el;
					return (
						<Card key={i}>
							<div className="d-flex align-items-center">
								<b className="mr-auto w-75 text-left">
									{value}
									{type === 'PERCENTAGE' ? '%' : ' BDT'} Off
								</b>
								{!!promoCode && promoCode === code && (
									<Icon
										path={checkboxCircle}
										className="ml-auto"
										height={15}
										width={15}
										fill="#05ad5d"
									/>
								)}
							</div>
							{conditions.length > 0 &&
								conditions.map((el, i) => !el.main && <small className="d-block">{el.text}</small>)}
							{conditions.length > 0 &&
								conditions.map(
									(el, i) =>
										el.main && (
											<span className="mb-1 text-dark d-block font-weight-semibold">
												{el.text}
											</span>
										),
								)}
							<span
								className="bg-primary text-white d-inline-block my-2 rounded-pill py-1 px-3 "
								role="button"
								onClick={() => clickHandler(code, false)}
							>
								Apply
							</span>
							<small className="text-dark d-block">{endDate}</small>
						</Card>
					);
				})}
			</CardContainer>
		);
	}

	return null;
};

interface PropsType {
	couponData: ICoupon[];
	promoCode: string;
	clickHandler: (code: string, isOpen: boolean) => void;
}

const CardContainer = styled.div`
	max-height: 28rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: var(--light);
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		border-radius: 0.5rem;
		background: var(--primary);
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #02964c;
	}
`;

const Card = styled.div`
	background-color: #f3fff9;
	padding: 0.5rem;
	color: #05ad5d;
	border-radius: 5px;
	margin: 5px 0;
`;
