import { Button, FormCheck, Image } from '@components/atoms';
import { FC, useState } from 'react';
import styled from 'styled-components';

const Shipment: FC = () => {
	const [activeButton, setActiveButton] = useState({
		pickup: false,
		dropoff: false,
	});

	const handlePickUpClicked = () => {
		const newActiveButton = { ...activeButton };
		newActiveButton.pickup = !activeButton.pickup;
		newActiveButton.dropoff = false;
		setActiveButton(newActiveButton);
	};
	const handleDropOffClicked = () => {
		const newActiveButton = { ...activeButton };
		newActiveButton.pickup = false;
		newActiveButton.dropoff = !activeButton.dropoff;
		setActiveButton(newActiveButton);
	};
	const { pickup, dropoff } = activeButton;
	return (
		<>
			<Title>Select Return Shipment *</Title>
			<div>
				<ShipmentButton selected={pickup} onClick={handlePickUpClicked}>
					<h6>Pickup</h6>
					<p>Schedule for pick up</p>
				</ShipmentButton>

				<ShipmentButton selected={dropoff} onClick={handleDropOffClicked}>
					<h6>Drop Off</h6>
					<p>Return at the nearest location</p>
				</ShipmentButton>
			</div>
			{pickup && (
				<ShipmentButton className="mt-2 text-left" style={{ width: '100%' }} selected={false}>
					<div className="d-flex align-items-center">
						<FormCheck checked={pickup} type="radio" className="mb-0 mr-2" />
						<Image src="/images/zExpress.svg" width={69} />
						<div className="ml-3" style={{ fontSize: '12px', fontWeight: 600 }}>
							<h6 className="m-0 p-0">Pickup Address</h6>
							<p className="m-0 p-0">
								S M Mahadi Hasan, 01961900400, Bashati Dream, Level C5, House 03 Road 20, Gulshan 1,
								Dhaka 1212
							</p>
						</div>
					</div>
				</ShipmentButton>
			)}
			{dropoff && (
				<ShipmentButton className="mt-2 text-left" style={{ width: '100%' }} selected={false}>
					<div className="d-flex align-items-center">
						<FormCheck checked={dropoff} type="radio" className="mb-0 mr-2" />
						<Image src="/images/zdrop-logo.png" />
						<div className="ml-3" style={{ fontSize: '12px', fontWeight: 600 }}>
							<h6 className="m-0 p-0">Drop Off Address (Dhaka)</h6>
							<p className="m-0 p-0">House-7, Road-1/A, Baridhara J Block, Dhaka 1212</p>
						</div>
					</div>
				</ShipmentButton>
			)}
		</>
	);
};

interface ButtonProps {
	selected: boolean;
}

const Title = styled.p`
	padding: 0;
	margin: 0 0 12px 0;
	font-weight: 600;
	line-height: 18.62px;
`;

const ShipmentButton = styled(Button)<ButtonProps>`
	z-index: 999;
	margin-right: 19px;
	border: ${(props) => (props.selected === true ? '1px solid var(--primary)' : '1px solid #ECECEC')};
	/* padding: 0; */
	min-height: 76px;
	min-width: 200px;
	background-color: #fafafa;
	color: #4f4f4f;
	p {
		color: #828282;
		font-size: 12px;
		padding: 0;
		margin: 0;
	}
`;

ShipmentButton.defaultProps = {};
export default Shipment;
