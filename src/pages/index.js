import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout location='/'>
    {/* child num 0 'about page' */}
    <div style={{ padding: 30, maxWidth: 700 }}>
      <SEO title="me" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
      <div style={{ marginBottom: 20, }}>
        <h2 style={{ color: '#404040' }}>Hameed Muhammad</h2>
        <h5 style={{ color: '#404040' }}>Software Development Engineer, JS Ninja & Learner</h5>
      </div>
      <p style={{ marginBottom: 5 }}>Hey there, It's Hameed </p>
      <p>A software engineer and I like to build,
        and help other people build software products for web and mobile. <br />
        Currently I work as Software Engineer <a href="https://curawella.com" target="_blank" rel="noopener noreferrer">@Curawella</a> a telemedicine startup.  <br />
        And all the content here represents only my own opinions.  <br />
        Before this I worked for many software companies as software engineer. <br />
        I live in Alexandria, Egypt and I'm obsessed with it's see.  <br />
        I love to contribute into open source in my free time.  <br />
        I love Chess, running, and playing violin.
      </p>
      <h3 style={{ color: '#404040' }}>Latest Articles</h3>
      <h4 style={{ color: '#404040' }}>Using RxJS in react</h4>
      <p style={{ color: '#939393', marginBottom: 3 }}>Posted at 15/5/2019</p>
      <p style={{ color: '#939393', }}>Reactive Programming is there for a while the concept that come with isn't easy, I had a quiet long journy to master these skill...  <Link to={'using-rxjs'}>Read More</Link></p>
    </div>
  </Layout>
)


export default IndexPage
