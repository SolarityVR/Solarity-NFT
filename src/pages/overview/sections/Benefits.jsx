import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Benefit } from './components/Benefit';
import { variables } from '../../../shared/GlobalStyles';

export const Benefits = () => {
	const benefits = [
		{
			title:
				"Passport Level 1",
			lis: [
				'Access games on SGN Platform',
				'Can gain XP through quests',
				'1x $VERSE for each quest completed',
				'Can add up to 5 bundles, invite friends and start chats',
				'Not eligible for partner airdrops.',
			],
		},
		{
			title: 'Passport Level 2',
			lis: [
				'1.5x $VERSE for each quest completed',
				'1.5x XP boost',
				'Eligible for some airdrops',
				'Access beta testing.',
			],
		},
		{
			title:
				"Passport Level 3",
			lis: [
				'2x $VERSE for each quest completed',
				'2x XP boost',
				'Access to 3D Staking',
				'Access to Battle Pass, Weekly Airdrops',
				'Access to Beta Testing Alpha group',
			],
		},
		{
			title: 'Passport Level 4',
			lis: [
				'3x $VERSE for each quest completed',
				'3x XP boost',
				'Access to cross games loot boxes',
				'Become automatically a mod (revenue flowing in)',
				'Access a Completed Battle Pass',
			],
		},
	];

	const containerVar = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 1,
			},
		},
	};
	const itemVar = {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 2, ease: 'easeInOut' },
		},
	};

	return (
		<Container
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			variants={containerVar}
			className='section'
		>
			<span className='title'>
				Level Up your Passport.
			</span>
			<motion.div className='benefitsContainer'>
				{benefits.map(({ title, lis }) => (
					<motion.div variants={itemVar} key={title}>
						<Benefit title={title} lis={lis} />
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: grid;
	gap: 5rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	overflow: hidden;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-columns: 1fr;
	}
	.benefitsContainer {
		display: grid;
		gap: 3rem;
	}
`;
