import { FC } from 'react';
import { Row, Col, ColProps } from 'react-bootstrap';
import { HeadingWithIcon, HeadingWithIconProps } from '../HeadingWithIcon';

export const HandheldProductGrid: FC<PropsType> = ({ data, label, src, alt, ...rest }) => {
	const headingProps = { label, src, alt };

	if (data?.length > 0) {
		return (
			<Row>
				<Col xs={12}>
					<HeadingWithIcon size="sm" {...headingProps} />
				</Col>
				{data.map((e, i) => (
					<Col key={i} {...rest}>
						<p>Product</p>
					</Col>
				))}
			</Row>
		);
	}

	return null;
};

interface PropsType extends ColProps, Pick<HeadingWithIconProps, 'label' | 'src' | 'alt'> {
	data: any[];
}
