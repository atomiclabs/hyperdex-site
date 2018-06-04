import React from 'react'
import styles from './index.module.css'

import Button from '../Button'
import Chart from '../SVG/Chart'
import headerAppImage from '../../images/header-app.jpeg'
import Logo from '../SVG/Logo'

export default () => <div className={styles.header}>
	<Logo />
	<p className={styles.title}>The decentralized exchange for Atomic Swaps.</p>
	<p className={styles.subTitle}>Desktop app for BarterDEX. Currently in private testing phase, official launch in July 2018.</p>
	<Button text='Join the test' />
	<p className={styles.text}>Available for Windows, Mac OS and Linux.</p>
	<Chart />
	<img src={headerAppImage} alt='stf' className={styles.headerAppImage}/>
	<div className={styles.divider}></div>
</div>