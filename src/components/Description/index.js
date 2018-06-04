import React from 'react'
import styles from './index.module.css'

export default ({title, subTitle, image }) => <div className={styles.description}>
	<img className={styles.image} src={image} alt={`${title} image`} />
	<div className={styles.texts}>
		<p>{title}</p>
		<p>{subTitle}</p>
	</div>
</div>