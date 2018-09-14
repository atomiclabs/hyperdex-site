import React from 'react';
import styles from './index.module.css';

export default ({title, subTitle, image}) => (
	<div className={styles.description}>
		<div className={styles.imageWrapper}>
			<div className={styles.image} style={{backgroundImage: `url(${image})`}} alt={`${title} image`}/>
		</div>
		<div className={styles.texts}>
			<p className={styles.title}>{title}</p>
			<p className={styles.subTitle}>{subTitle}</p>
		</div>
	</div>
);
