import React from 'react';
import Button from '../Button';
import Chart from '../SVG/Chart';
import headerAppImage from '../../images/header-app.jpg';
import Logo from '../SVG/Logo';
import styles from './index.module.css';

export default () => (
	<div className={styles.header}>
		<Logo/>
		<p className={styles.title}><em>The</em> decentralized exchange for Atomic Swaps.</p>
		<p className={styles.subTitle}>Desktop app for BarterDEX. Currently in private testing phase, official launch in July 2018.</p>
		<Button text="Join the test"/>
		<p className={styles.text}>Available for MacOS, Linux and Windows.</p>
		{
			typeof window !== 'undefined' &&
			<Chart height={(window.innerWidth <= 375 && '100') || ((window.innerWidth > 375 && window.innerWidth <= 768) && '200')}/>
		}
		<img src={headerAppImage} className={styles.headerAppImage}/>
		<div className={styles.divider}/>
	</div>
);
