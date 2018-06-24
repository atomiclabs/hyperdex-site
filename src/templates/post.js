import React from 'react'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
    </div>
  )
}

export const query = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
    }
  }
}
`