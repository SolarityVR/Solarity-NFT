import styled from 'styled-components';
import { NFTOverview } from './components/NFTOverview';
import orange from './assets/room.png';
import purple from './assets/passport.gif';
import yellow from './assets/yellow-min.jpg';
import blue from './assets/bundlee.png';
import { TitleSection } from '../../../shared/GlobalStyles';

export const NFTSOverview = () => {
	const nfts = [
		{
			img: purple,
			title: 'Your Metaverse ID',
			type: '3D Passport',
			rarity: 'Radical',
			supply: 'FREE',
			roi: '2x',
			left: false,
			description:
			"Your meteaverse identity. \nAggregate your web2 and web3 accountsand make new connections",
			list: "3D Customized NFT with your data imprinted",
			list2: "Access to SGN network",
			list3: "Access to SGN Quests",
			list4: "WL spot for Solarity Bundle",
			list5: "Beta testing access",
			list7: "Non Transferable and Editable",
			list6: "Your .verse domain",
		 
		},
		{
			img: orange,
			title: 'Your Solarity Spot',
			type: 'NFT Orange',
			rarity: 'Epic',
			supply: '50 ETH',
			roi: '5x',
			left: true,
			description:
			"Virtual Experiences for your friends and communities. Click the room and try the demo. WL Hunting Town Hall meetings Game nights Tournaments Mints Auctions Poker and betting",
			list: "Customizable Pod",
			list2: "6 frames for your NFTs",
			list3: "Embed your gallery on Twitter",
			list4: "Sell NFTs in 3D",
			list5: "Invite people with one click, from anywhere",
			list7: "Access 3D Staking",
			list6: "Your personal linktree 3D",

		},
		/*{
			img: yellow,
			title: 'Oh my gold!',
			type: ' NFT Yellow',
			rarity: 'Legendary',
			supply: '191 ETH',
			roi: '8x',
			left: true,
			description:
			"Creadore is developing its own Metaverse and you will have access to it!! More info on this, features, released alongside Creadore's Roadmap. Metaverse itself will have its own Roadmap full of development and features.",
		},*/,
		{
			img: blue,
			title: 'Solarity Bundle',
			type: ' NFT Blue',
			rarity: 'Supreme',
			supply: '20 ETH',
			roi: '10x',
			left: false,
			description:
			"The full package to Solarity. You are a believer, getting ready for the roadmap. You will get the best benefits from our platform.",
			list: "Premium Passport",
			list2: "Customizable Limited Edition Pod included",
			list3: "Eligible for airdrops",
			list4: "Access to revenue sharing",
			list5: "Access to Premium Battle Pass",
			list6: "Up to 100 $VERSE/day",
			list7: "25pp capacity"

		},
	];

	return (
		<Container className='section' id='nfts'>
			<div className='titles'>
				<TitleSection content='Solarity NFT' />
			</div>
			{nfts.map(
				({ img, title, type, rarity, supply, roi, description, list, list2, list3, list4, list5, list6, list7, left }) => (
					<NFTOverview
						key={title}
						img={img}
						title={title}
						type={type}
						rarity={rarity}
						supply={supply}
						roi={roi}
						description={description}
						list={list}
						list2={list2}
						list3={list3}
						list4={list4}
						list5={list5}
						list6={list6}
						list7={list7}
						left={left}
					/>
				)
			)}
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
	.titles {
		text-align: center;
		margin-bottom: 1rem;
	},
`;
