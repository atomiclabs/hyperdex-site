import React from 'react' 
import Blog from '../components/Blog'
import Footer from '../components/Footer' 
 

export default ({data}) => <div> 
  <Blog posts={data}/>
  <Footer />
</div>

export const blogQuery = graphql`
query posts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          text
        }
      }
    }
  }
}
`