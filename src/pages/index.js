import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
const IndexPage = () => (
  <Layout>
    {/* child num 1 'about page' */}
    <div>
      <SEO title="me" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
      <Header >
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <h2 style={{ color: '#1d8ffa' }}>Hameed Muhammad</h2>
          <h4>Software Development Engineer, JS developer & ultimate learner</h4>
        </div>
        <div style={{ display: 'flex', flex: 2 }} >
          <Image />
        </div>
      </Header>
      <h6>Hey there, I'm Hameed a software engineer and I like to build, and help other people build software products for web and mobile.</h6>
      <h6>I love to contribute into open source in my free time</h6>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
    <div>

    </div>
    <div>

    </div>
  </Layout>
)

export default IndexPage
