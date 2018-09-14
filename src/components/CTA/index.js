import React from 'react';
import styles from './index.module.css';

export default ({title, subTitle, logo}) => (
	<div className={styles.cta}>
		<img src={logo}/>
		<p className={styles.title}>{title}</p>
		<p className={styles.subTitle}>{subTitle}</p>
	</div>
);
