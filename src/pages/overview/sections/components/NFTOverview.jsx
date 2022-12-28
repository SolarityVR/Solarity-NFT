import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../../../shared/GlobalStyles';

export const NFTOverview = ({
	img,
	title,
	type,
	rarity,
	supply,
	roi,
	description,
	list,
	list2,
	list3,
	list4,
	list5,
	list6,
	list7,
	left,
}) => {
	const titleVar = {
		hidden: { x: -200 },
		show: {
			x: 0,
			transition: { duration: 0.8 },
		},
	};
	const imgVar = {
		hidden: { x: 200 },
		show: {
			x: 0,
			transition: { duration: 0.8 },
		},
	};
	return (
		<Container style={{ flexDirection: left && 'row-reverse' }}>
			<Content
				variants={titleVar}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<p className='title' style={{marginTop:"15px"}}>{title}</p>
				<p style={{marginTop:"25px"}}>{description}</p>
				<div style={{height:"30px"}}></div>
				<li style={{marginLeft:"30px"}}>{list}</li>
				<li style={{marginLeft:"30px"}}>{list2}</li>
				<li style={{marginLeft:"30px"}}>{list3}</li>
				<li style={{marginLeft:"30px"}}>{list4}</li>
				<li style={{marginLeft:"30px"}}>{list5}</li>
				<li style={{marginLeft:"30px"}}>{list6}</li>
				<li style={{marginLeft:"30px"}}>{list7}</li>
				
			</Content>
			<Img
				variants={imgVar}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<img src={img} alt={type} />
			</Img>
		</Container>
	);
};

const Content = styled(motion.div)`
	width: 50%;
	color: ${variables.colors.font_default};

	span {
		color: ${variables.colors.gray};
		font-weight: ${variables.font.regular};
		margin: 1rem 0;
	}
`;
const Img = styled(motion.div)`
	overflow: hidden;
	width: 50%;
	height: 70%;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 5rem;
	padding: 10px;
	overflow: hidden; // For animations
	@media only screen and (max-width: ${variables.mediaQueries.mobile_xl}) {
		// Make responsive and images over text
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		grid-template-areas:
			'content'
			'img';
		align-self: center;
		gap: 1rem;
		${Img}, ${Content} {
			width: 100%;
			height: 100%;
		}
		${Img} {
			grid-area: img;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		${Content} {
			grid-area: content;
			width: 100%;
		}
	}
`;
