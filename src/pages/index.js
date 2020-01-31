import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/form'
import { Icon, Form } from 'antd';

const IndexPage = () => {
  const Contact = Form.create({ name: 'coordinated' })(ContactForm);
  return (
    <Layout location='/'>
      <div style={{ padding: 40, maxWidth: 800 }}>
        <SEO title="me" keywords={[`hameed`, 'freelancer', `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`, 'react native', 'vue']} />
        <div style={{ marginBottom: 20, }}>
          <h2 style={{ color: '#404040' }}>Hameed Muhammad</h2>
          <h5 style={{ color: '#404040' }}>Software Engineer & JS Ninja</h5>
        </div>
        <br />
        <h3 style={{ color: '#404040' }}>Hey there, It's Hameed! </h3>
        <p style={{ marginBottom: 5 }}>A software engineer who likes to build,
          and help other people build software products for web and mobile. <br />
          And I have been doing software development stuff for almost {new Date().getFullYear() - 2016} years. <br />
          Currently, I work as a Software Engineer at <a href="https://shieldfy.io" target="_blank" rel="noopener noreferrer">Shieldfy</a> a Security protection and vulnerabilities detection for developers web application startup.  <br />
          Previously in <a href="https://curawella.com" target="_blank" rel="noopener noreferrer">Curawella</a> a telemedicine startup.  <br />
          And all the content here represents only my own opinions.  <br />
          Before this, I worked for many software companies as a software engineer <br />
          Usually using :
        </p>
        <ul>
          <li>React.js</li>
          <li>React Native</li>
          <li>Flutter</li>
          <li>Vue</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <br />
        <p>
          You can find my (generally outdated) resume
          <a style={{ marginLeft: 5 }} href='https://docs.google.com/document/d/1Cu9T8BxFvL3ske0WXSF9qORqxVZLL8Oo0J-bjOqorjI/edit?usp=sharing' target="_blank" rel="noopener noreferrer">here</a>.<br />
          I live in Alexandria, Egypt and I'm obsessed with it's see.  <br />
          I love to contribute to open source in my free time.  <br />
          I love Chess, running, singing, playing violin and above all JS <Icon theme='filled' style={{ color: '#e25555' }} type='heart' />.
        </p>
        <br />
        <h3 style={{ color: '#404040' }}>Academic Life</h3>
        <p style={{ marginBottom: 5 }}>Not too much but, I hold a BSc.Computer Science</p>
        <p style={{ marginBottom: 5 }}>Also, I do some research in the Software Engineering for Self-Adaptive Systems</p>
        <br />
        <br />
        <h3 style={{ color: '#404040' }}>Wanna Say Hi!</h3>
        <p>
          You can follow and DM me on
          <a style={{ marginLeft: 5 }} href='https://www.twitter.com/hameed0z' target="_blank" rel="noopener noreferrer">
            <Icon type='twitter' style={{ fontSize: 17 }} />
            <span> @hameed0z </span>
          </a>
          <br />
          Also, you can
          <a style={{ marginRight: 5 }} href="mailto:hamid.mu7mad@gmail.com" target="_blank" rel="noopener noreferrer">
            <span> send me an email! </span>
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
