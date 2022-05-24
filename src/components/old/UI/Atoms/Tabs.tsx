import { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardWithBorder } from '../Card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabItem = (props: TabItemProps): null => null;

export const Tabs: FC<TabsProps> = ({ defaultId, children, ...rest }: TabsProps): JSX.Element | null => {
	const [activeID, setActiveID] = useState<number>(0);

	useEffect(() => {
		if (defaultId) setActiveID(defaultId);
	}, [defaultId]);

	if (children && Array.isArray(children)) {
		return (
			<TabContainer {...rest}>
				<ul className="Tab-Header">
					{children.map(({ props: { title } }, i) => (
						<li key={i} className={`Tab-Header__Single${i === activeID ? ' isActive' : ''}`}>
							<button onClick={() => setActiveID(i)}>{title}</button>
						</li>
					))}
				</ul>
				<div className="Tab-Content">
					{children.map(({ props: { children: child } }, i) => (
						<div key={i} className={`Tab-Content__Single${i === activeID ? ' isActive' : ''}`}>
							{child}
						</div>
					))}
				</div>
			</TabContainer>
		);
	} else if (children && !Array.isArray(children)) {
		return (
			<TabContainer {...rest}>
				<ul className="Tab-Header">
					<li className="Tab-Header__Single isActive">
						<button>{children.props.title}</button>
					</li>
				</ul>
				<div className="Tab-Content">
					<div className="Tab-Content__Single isActive">{children.props.children}</div>
				</div>
			</TabContainer>
		);
	}

	return null;
};

interface TabsProps {
	children: JSX.Element | JSX.Element[];
	defaultId?: number;
	type?: 'shadow' | 'border';
	className?: string;
}

interface TabItemProps {
	title: string;
	children: ReactNode;
}

Tabs.defaultProps = {
	type: 'border',
};

export const TabContainer = styled(CardWithBorder)`
	padding: 0;

	.Tab {
		&-Header {
			margin: 0;
			padding: 0 1.563rem;
			border-bottom: 1px solid var(--gray-300);

			&__Single {
				list-style: none;
				display: inline-block;

				button {
					position: relative;
					padding: 1rem 1.563rem;
					border: 0;
					background-color: transparent;
				}

				&.isActive {
					button {
						&:after {
							position: absolute;
							content: '';
							width: 100%;
							height: 4px;
							left: 0;
							bottom: -1px;
							background-color: var(--primary);
							border-top-left-radius: 0.625rem;
							border-top-right-radius: 0.625rem;
						}
					}
				}
			}
		}

		&-Content {
			padding: 1rem 1.563rem;

			&__Single {
				display: none;

				&.isActive {
					display: block;
				}
			}
		}
	}
`;
