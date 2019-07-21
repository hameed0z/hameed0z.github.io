import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/form'
import { Icon, Form } from 'antd';
const IndexPage = () => {
  //  const [theme, setTheme] = useState('dark');
  const Contact = Form.create({ name: 'coordinated' })(ContactForm);
  return (
    <Layout location='/'>
      <div style={{ padding: 40, maxWidth: 800 }}>
        <SEO title="me" keywords={[`hameed`, 'freelancer', `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`, 'react native', 'vue']} />
        <div style={{ marginBottom: 20, }}>
          <h2 style={{ color: '#404040' }}>Hameed Muhammad</h2>
          <h5 style={{ color: '#404040' }}>Software Development Engineer & JS Ninja</h5>
        </div>
        <br />
        <p style={{ marginBottom: 5 }}>Hey there, It's Hameed! </p>
        <p style={{ marginBottom: 5 }}>A software engineer who likes to build,
          and help other people build software products for web and mobile. <br />
          And I have been doing software development stuff for almost 3 years. <br />
          Currently I work as a Software Engineer at <a href="https://curawella.com" target="_blank" rel="noopener noreferrer">Curawella</a> a telemedicine startup.  <br />
          And all the content here represents only my own opinions.  <br />
          Before this I worked for many software companies as a software engineer <br />
          Usually using :
        </p>
        <ul>
          <li>React.js</li>
          <li>React Native</li>
          <li>Vue</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>PostgreSQl</li>
          <li>MongoDB</li>
        </ul>
        <p>
          I live in Alexandria, Egypt and I'm obsessed with its sea.  <br />
          I love to contribute into open source in my free time.  <br />
          I love Chess, running, singing ,playing violin and above all JS <Icon theme='filled' style={{ color: '#e25555' }} type='heart' />.
        </p>
        <br />
        <h3 style={{ color: '#404040' }}>Wanna Say Hi!</h3>
        <p>
          You can reach me on
          <a style={{ marginLeft: 5 }} href='https://www.twitter.com/hameed0z' target="_blank" rel="noopener noreferrer">
            <Icon type='twitter' style={{ fontSize: 17 }} />
            <span> @hameed0z </span>
          </a>
          <br />
          Also you can
          <a style={{ marginRight: 5 }} href="mailto:hamid.mu7mad@gmail.com" target="_blank" rel="noopener noreferrer">
            <span> send me email! </span>
            <Icon theme='filled' type='mail' style={{ fontSize: 17 }} />
          </a>
          or drop me a message and I will reply as soon as possible
        </p>
        <br />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
