import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
    <Layout location='work'>
        {/* child num 1 'work page' */}
        <div style={{ padding: 30 }}>
            <SEO title="work" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
            <h2 style={{ color: '#404040' }}>Coming soon...</h2>
        </div>
    </Layout>
)

export default IndexPage
