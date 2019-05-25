import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout location='blog'>
      <div style={{ padding: 30, maxWidth: 550 }}>
        <SEO title="me" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
        <div style={{ marginBottom: 20, }}>
          <h2 style={{ color: '#404040' }}>{post.frontmatter.title}</h2>
          <p style={{ color: '#939393', }}>Posted at {post.frontmatter.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`