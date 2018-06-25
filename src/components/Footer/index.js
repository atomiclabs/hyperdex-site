import React from 'react'
import styles from './index.module.css'

import SmallLogo from '../SVG/SmallLogo'

const items = [
	{
		title: 'Download',
		url: ''
	},
	{
		title: 'Blog',
		url: '/blog'
	},
	{
		title: 'GitHub',
		url: 'https://github.com/hyperdexapp'
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/HyperDEXApp'
	}
]

export default () => <div className={styles.footer}>
	<SmallLogo />
	<ul className={styles.navLinks}>
		{
			items.map(({title, url}) => <li key={title}><a href={url}>{title}</a></li>)
		}
	</ul>
</div>