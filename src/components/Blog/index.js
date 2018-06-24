import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

export default ({ posts: { allMarkdownRemark: { edges } } }) => 
<div className={styles.blog}> 
    <h2 className={styles.title}>Recent Blog Posts</h2>
    <div className={styles.posts}>
        {
            edges.map(({node: {frontmatter: {title, path, text}}}) => <div className={styles.post}>
                <Link style={{textDecoration: 'none'}} to={path}><h3 className={styles.postTitle}>{title}</h3></Link>
                <p className={styles.postText}>{text}</p>
            </div>)
        }
    </div>
</div>