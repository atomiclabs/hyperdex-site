import React from 'react'
import styles from './index.module.css'

import CTA from '../CTA'
import Exchange from '../SVG/Exchange'
import Swap from '../SVG/Swap'
import Portfolio from '../SVG/Portfolio'
import Button from '../Button'
import HorizontalWave from '../SVG/HorizontalWave'

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

export default () => <div className={styles.main}>
	<p className={styles.title}>One stop crypto exchange solution</p>
	<div className={styles.ctas}>
		{
			ctas.map(cta => <CTA key={cta.title} logo={cta.logo} title={cta.title} subTitle={cta.subTitle} />)
		}
	</div>
	<p style={{marginTop: '5rem'}} className={styles.title}>Grandma-friendly User Experience</p>
	<div className={styles.descriptions}>
	</div>
	<p>Ready to try HyperDEX?</p>
	<p>Do your first Atomic Swap in minutes.</p>
	<Button text='Join the test' />
	<p className={styles.text}>Available for Windows, Mac OS and Linux.</p>
	<HorizontalWave />
</div>