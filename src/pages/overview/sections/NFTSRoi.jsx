import orange from './assets/room.png';
import purple from './assets/passport.gif';
import yellow from './assets/yellow-min.jpg';
import blue from './assets/bundle.png';
import { NFTRoi } from './components/NFTRoi';
import { TitleSection } from '../../../shared/GlobalStyles';

const nfts = [
	{
		img: purple,
		name: '3D Passport',
		rarity: 'Free',
		supply: 'Unlimited',
		supplyPercentage: 100, // This is for css
		roi: 'Questing ROI',
		roiPercentage: 20, // This value has to be higher than 10
	},
	{
		img: orange,
		name: 'Pods',
		rarity: '1.618 SOL',
		supply: '3,142',
		supplyPercentage: 60,
		roi: '3D Staking ROI',
		roiPercentage: 50,
	},
	/*{
		img: yellow,
		name: 'NFT Yellow',
		rarity: 'VIP',
		supply: '191 ETH',
		supplyPercentage: 30,
		roi: '8x',
		roiPercentage: 80,
	},*/
	{
		img: blue,
		name: 'Bundle',
		rarity: '3.142 SOL',
		supply: '1,618',
		supplyPercentage: 40,
		roi: 'Battle Pass + Weekly Drops ROI',
		roiPercentage: 100,
	},
];
export const NFTSRoi = () => {
	return (
		<section className='section'>
			<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
				<TitleSection content='NFT Specs' />
			</div>
			{nfts.map(
				({
					img,
					name,
					rarity,
					supply,
					roi,
					supplyPercentage,
					roiPercentage,
				}) => (
					<NFTRoi
						key={name}
						img={img}
						name={name}
						rarity={rarity}
						supply={supply}
						roi={roi}
						supplyPercentage={supplyPercentage}
						roiPercentage={roiPercentage}
					/>
				)
			)}
		</section>
	);
};
