import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Signature from "../components/signature"
import { Icon, Button } from 'antd'
const windowGlobal = typeof window !== 'undefined' && window
export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout location='blog'>
      <div style={{ padding: 40, maxWidth: 800 }}>
        <SEO title={post.frontmatter.title} keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
        <div style={{ marginBottom: 20, }}>
          <h2 style={{ color: '#404040' }}>{post.frontmatter.title}</h2>
          <p style={{ color: '#939393', marginBottom: 0 }}>Posted at {post.frontmatter.date}</p>
          <Button size='small' ghost type='primary' href={`https://twitter.com/intent/tweet?original_referer=https://hameed.tech&amp;ref_src=&amp;text=${post.frontmatter.title}&amp;url=${windowGlobal.location}`} target="_blank" rel="noopener noreferrer">
            <Icon type='twitter' style={{ fontSize: 17 }} />
            <span> Tweet</span>
          </Button>
          <Button style={{ marginLeft: 5 }} size='small' type='primary' href={`https://www.facebook.com/sharer/sharer.php?u=${windowGlobal.location}`} target="_blank" rel="noopener noreferrer">
            <Icon type='facebook' theme='filled' style={{ fontSize: 17 }} />
            <span> Share</span>
          </Button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>By following me on twitter
        <a style={{ marginLeft: 5 }} href='https://www.twitter.com/hameed0z' target="_blank" rel="noopener noreferrer">
            <Icon type='twitter' style={{ fontSize: 17 }} />
            <span> @hameed0z </span>
          </a>
        </p>
        <p style={{ display: 'inline' }}>Thanks</p>
        <div style={{ width: 200 }}>
          <Signature />
        </div>
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