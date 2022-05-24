import { pagesAPI } from '@libs/api';
import Icon, { thumbDown, thumbUp } from '@libs/icons';
import { authPopup, getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const VoteAnswer: FC<PropsType> = ({ questionTypeId, questionId, res }) => {
	const [disabled, setDisabled] = useState<boolean>(false);
	const dispatch = useDispatch();
	const { isAuthenticate } = useSelector(getUserState);
	const router = useRouter();

	const handleGiveFeedback = async (ans?: 'yes' | 'no') => {
		if (isAuthenticate) {
			setDisabled(true);
			const payload = { questionTypeId, questionId, answer: ans };
			const { success } = await pagesAPI.faqStatistics(payload);
			if (success) router.push(router.asPath, undefined, { scroll: false });
			setDisabled(false);
		} else {
			dispatch(authPopup({ isActive: true, type: 'signin' }));
		}
	};

	return (
		<Wrapper>
			<p className="text-dark mb-0 mr-3">Was this helpful?</p>
			<Button variant="link" onClick={() => handleGiveFeedback('yes')} disabled={disabled}>
				<Icon path={thumbUp} width={18} height={18} fill={res === 'yes' ? '#00b55b' : '#999999'} /> Yes
			</Button>
			<Button variant="link" onClick={() => handleGiveFeedback('no')} disabled={disabled}>
				<Icon path={thumbDown} width={18} height={18} fill={res === 'no' ? '#ff0065' : '#999999'} /> No
			</Button>
		</Wrapper>
	);
};

export default VoteAnswer;

interface PropsType {
	questionTypeId: number;
	questionId: number;
	res: string;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;

	.btn-link {
		padding: 0;
		border: 0;

		& + .btn-link {
			margin-left: 20px;
		}
	}
`;
