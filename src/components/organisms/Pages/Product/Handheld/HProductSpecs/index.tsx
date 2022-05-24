import { Button } from '@components/atoms';
import { ISingleProduct } from '@libs/api/interfaces';
import Icon, { arrowRight, listCheck, menu, question } from '@libs/icons';
import Descriptions from '@pages/product/_components/Descriptions';
import FAQs from '@pages/product/_components/FAQs';
import Specifications from '@pages/product/_components/Specifications';
import { FAQItems } from '@utils/constants';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SpecSidebar } from './SpecSidebar';

const navItems = [
	{ icon: listCheck, name: 'Specifications' },
	// { icon: shieldStar, name: 'Reviews' },
	// { icon: airplay, name: 'How to Order' },
	{ icon: question, name: 'FAQ(s)' },
	// { icon: questionnaire, name: 'Wholesale Inquiry' },
	{ icon: menu, name: 'Descriptions' },
];
export const HProductSpecs: FC<HProductSpecsProps> = (props) => {
	const [activeItem, setActive] = useState<string>(null);
	const { specification, longDescription } = props;

	useEffect(() => {
		if (activeItem) {
			document.querySelector('body').classList.add('modal-open');
		} else {
			document.querySelector('body').classList.remove('modal-open');
		}

		return () => {
			document.querySelector('body').classList.remove('modal-open');
		};
	}, [activeItem]);

	return (
		<Wrapper>
			<ul>
				{navItems.map(({ icon, name }, i) => (
					<li key={i}>
						<Button block variant="link" onClick={() => setActive(name)}>
							<Icon path={icon} width={16} height={16} fill="var(--dark)" />
							<span className="ml-2">{name}</span>
							<Icon className="arrowIcon" path={arrowRight} width={16} height={16} />
						</Button>
					</li>
				))}
			</ul>
			<SpecSidebar isActive={!!activeItem} onHide={() => setActive(null)} name={activeItem}>
				{activeItem === 'Descriptions' ? (
					<Descriptions data={longDescription} />
				) : activeItem === 'Specifications' ? (
					<Specifications data={specification} />
				) : activeItem === 'FAQ(s)' ? (
					<FAQs data={FAQItems} />
				) : null}
			</SpecSidebar>
		</Wrapper>
	);
};

type HProductSpecsProps = Pick<ISingleProduct, 'name' | 'specification' | 'longDescription'>;

const Wrapper = styled.div`
	width: calc(100% + 0.938rem);
	display: block;
	margin: 2rem -0.469rem 0;
	padding: 0;
	border-top: 1px solid var(--border);

	ul {
		width: 100%;
		display: block;
		margin: 0;
		padding: 0;

		li {
			width: 100%;
			list-style: none;
			display: block;
			border-bottom: 1px solid var(--border);

			button {
				text-align: left;

				span {
					color: var(--dark);
					font-weight: 600;
				}

				.arrowIcon {
					float: right;
				}
			}
		}
	}
`;
