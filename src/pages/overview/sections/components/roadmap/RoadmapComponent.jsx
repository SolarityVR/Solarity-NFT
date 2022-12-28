import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../../../../shared/GlobalStyles';
import { Stage } from './Stage';
import { Button } from '../../../../../shared/Button';

export const RoadmapComponent = () => {
	const stages = [
		{
			stage: 'Stage 1',
			title: 'THE VISION',
			items: [
				'Build first pods concept',
				'Brand Development',
				'Lay out platform design',
				'Received grant from Solana',
				'Team recruiting',
			],
			link: '#',
		},
		{
			stage: 'Stage 2 (Current)',
			title: 'COMING OUT',
			items: [
				'Develop minting platform',
				'Develop social chat',
				'Launch Community set up',
				'Minting Events',
				'Launch beta platform and quests',
			],
			link: '#',
		},
		{
			stage: 'Stage 3',
			title: 'BE SOLARITY',
			items: [
				'Develop partnerships for battle pass',
				'Release Solarity open world',
				'Partner with more games',
				'Release App ',
				'Release extension to play inside Twitter',
			],
			link: '#',
		},
		{
			stage: 'Stage 4',
			title: 'THE FUTURE',
			items: [
				'Add web2 games through cloud computing',
				'Release VR app',
				'3D Merch IRL',
				'Community meetings and events IRL',
				'Much More',
			],
			link: '#',
		},
	];

	const stageVar = {
		hidden: { x: -300 },
		show: {
			x: 0,
			transition: { duration: 1 },
		},
	};

	return (
		<Container>
			{stages.map(({ stage, title, items, link }) => (
				<motion.div
					key={stage}
					variants={stageVar}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<Stage stage={stage} title={title} items={items} link={link} />
				</motion.div>
			))}
			<Button content='Join Now' />
		</Container>
	);
};

const Container = styled.div`
	background-color: ${variables.colors.bg_default};

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	overflow: hidden;
`;
