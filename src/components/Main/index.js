import React from 'react'
import styles from './index.module.css'

import CTA from '../CTA'
import Exchange from '../SVG/Exchange'
import Swap from '../SVG/Swap'
import Description from '../Description'
import Portfolio from '../SVG/Portfolio'
import Button from '../Button'
import HorizontalWave from '../SVG/HorizontalWave'
import SideWave from '../../images/wave.png'

import WalletImage from '../../images/wallet.jpeg'
import ExchangeImage from '../../images/exchange.jpeg'
import SwapImage from '../../images/swap.jpeg'


const ctas = [
	{
		logo: <Exchange />,
		title: 'Decentralized Exhange',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		logo: <Swap />,
		title: 'Simple Atomic Swaps',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		logo: <Portfolio />,
		title: 'Portfolio Manager',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
	},
]

const descriptions = [
	{
		image: WalletImage,
		title: 'HyperDEX has an awesome wallet',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
	},
	{
		image: SwapImage,
		title: 'You can do Atomic Swaps easily',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
	},
	{
		image: ExchangeImage,
		title: 'HyperDEX has an awesome Exchange',
		subTitle: 'Crypto ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
	}
]

export default () => <div className={styles.main}>
	<p className={styles.title}>One stop crypto exchange solution</p>
	<div className={styles.ctas}>
		{
			ctas.map(cta => <CTA key={cta.title} logo={cta.logo} title={cta.title} subTitle={cta.subTitle} />)
		}
	</div>
	<p style={{marginTop: '5rem'}} className={styles.title}>Grandma-friendly User Experience</p>
	<div className={styles.descriptions}>
		{
			descriptions.map(description => <Description key={description.title} title={description.title} image={description.image} subTitle={description.subTitle}/>)
		}
	</div>
	<div className={styles.leftWave}>
		<img src={SideWave} alt='wave'/>
	</div>
	<div className={styles.rightWave}>
		<img src={SideWave} alt='wave'/>
	</div>
	<p style={{marginTop: '2rem'}} className={styles.title}>Ready to try HyperDEX?</p>
	<p className={styles.subTitle}>Do your first Atomic Swap in minutes.</p>
	<Button text='Join the test' />
	<p className={styles.text}>Available for Windows, macOS and Linux.</p>
	<HorizontalWave />
</div>