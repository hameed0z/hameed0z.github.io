import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <Layout location='blog'>
        {/* child num 2 'blog page' */}
        <div style={{ padding: 40, maxWidth: 800 }}>
            <SEO title="blog" keywords={['hameed0z', `hameed`, `blog`, `software`, `development`, 'web', 'app', 'application']} />
            <h3 style={{ color: '#404040' }}>Latest Articles</h3>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h4 style={{ color: '#404040' }}>{post.node.frontmatter.title}</h4>
                    <p style={{ color: '#939393', marginBottom: 3 }}>Posted at {post.node.frontmatter.date}</p>
                    <p style={{ color: '#939393', }}>{post.node.excerpt.substring(0, 200)}...  <Link to={post.node.frontmatter.path}>Read More</Link></p>
                </div>
            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        date
                        title
                        author
                        tags
                    }
                    excerpt
                }
            }
        }
    }
`

export default BlogPage
