import { Fragment, Dispatch, FC, SetStateAction, MouseEventHandler } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, ButtonProps } from '@components/atoms';
import styled from 'styled-components';

export const TypeHeader: FC<TypeHeaderProps> = ({
	header,
	updateHandler,
	formType,
	setFormType,
	isButton,
	...rest
}) => (
	<Wrapper className="align-items-center">
		<Col md={8}>
			<h6 className="font-weight-semibold">{header}</h6>
			<p>
				Make sure your address is correct. If the address contains typos or other errors, your package may be
				undeliverable.
			</p>
		</Col>
		{!isButton && (
			<Col md={4} className="text-md-right Col_Bottom">
				{formType === 'add' || formType === 'edit' ? (
					<Button variant="link" className="text-danger" onClick={() => setFormType(null)}>
						Cancel
					</Button>
				) : (
					<Fragment>
						<Button
							variant="link"
							className="d-block ml-auto py-0 mb-2 ChangeAddress"
							onClick={updateHandler}
						>
							Change Address
						</Button>
						<Button {...rest} onClick={() => setFormType('add')}>
							Add New Address
						</Button>
					</Fragment>
				)}
			</Col>
		)}
	</Wrapper>
);

export interface TypeHeaderProps extends Omit<ButtonProps, 'onClick'> {
	header: string;
	updateHandler?: MouseEventHandler<HTMLButtonElement>;
	isButton?: boolean;
	formType: 'add' | 'edit';
	setFormType: Dispatch<SetStateAction<'add' | 'edit'>>;
}

TypeHeader.defaultProps = {
	pill: true,
	outline: true,
	variant: 'dark',
	isButton: false,
};

const Wrapper = styled(Row)`
	@media (max-width: 767.99px) {
		.Col_Bottom {
			margin-bottom: 0.65rem;

			.ChangeAddress {
				display: inline-block !important;
			}
		}
	}
`;
