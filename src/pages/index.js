import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout location='/'>
    {/* child num 0 'about page' */}
    <div style={{ padding: 30, maxWidth: 550 }}>
      <SEO title="me" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
      <div style={{ marginBottom: 20, }}>
        <h2 style={{ color: '#404040' }}>Hameed Muhammad</h2>
        <p style={{ color: '#939393', }}>Software Development Engineer, JS Ninja & Learner</p>
      </div>
      <p>Hey there, I'm Hameed a software engineer and I like to build, and help other people build software products for web and mobile. I love to contribute into open source in my free time</p>
      <h3 style={{ color: '#404040' }}>Latest Articles</h3>
      <h4 style={{ color: '#404040' }}>Using RxJS in react</h4>
      <p style={{ color: '#939393', marginBottom: 3 }}>Posted at 15/5/2019</p>
      <p style={{ color: '#939393', }}>Reactive Programming is there for a while the concept that come with isn't easy, I had a quiet long journy to master these skill...  <Link to={'using-rxjs'}>Read More</Link></p>
    </div>
  </Layout>
)


export default IndexPage
