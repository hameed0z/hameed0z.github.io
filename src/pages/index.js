import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Icon } from 'antd';

const IndexPage = () => {
  return (
    <Layout location='/'>
      <div style={{ padding: 40, maxWidth: 800 }}>
        <SEO title="me" keywords={['hameed0z', 'hameed', 'abdulhameed', 'abdulmuttalib', 'freelancer', `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', 'react']} />
        <div style={{ marginBottom: 20, }}>
          <h2 style={{ color: '#404040' }}>Abdulhameed Abdulmuttalib</h2>
          <h5 style={{ color: '#404040' }}>Software Engineer & Machine Learning Specialist</h5>
        </div>
        <br />
        <h3 style={{ color: '#404040' }}>Hey there, It's Hameed! </h3>
        <p style={{ marginBottom: 5 }}>A software engineer who likes to build,
          and help other people build software and data products for humans. <br />
          And I have been doing software development stuff for almost {new Date().getFullYear() - 2016} years. <br />
          Currently, I work as a Software Engineer at <a href="https://group.jumia.com/" target="_blank" rel="noopener noreferrer">Jumia Group</a> <br />
          Also, I work as a contract Software Engineer at <a href="https://squadio.com" target="_blank" rel="noopener noreferrer">Squadio</a> <br />
          Previously in <a href="https://shieldfy.io" target="_blank" rel="noopener noreferrer">Shieldfy</a> a Security protection and vulnerabilities detection for developers web application startup.
          & in <a href="https://curawella.com" target="_blank" rel="noopener noreferrer">Curawella</a> a telemedicine startup.  <br />
          And all the content here represents only my own opinions.  <br />
          Before this, I worked for many software companies as a software engineer <br />
          Usually using :
        </p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>NestJS</li>
          <li>NodeJS</li>
          <li>FastAPI</li>
          <li>Python</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <br />
        <p>
          You can find my (generally outdated) resume
          <a style={{ marginLeft: 5 }} href='https://docs.google.com/document/d/1wzEawYjU_D26MxupmHOb41DaibY8I9f3/edit?usp=sharing&ouid=108913354489359322878&rtpof=true&sd=true' target="_blank" rel="noopener noreferrer">here</a>.<br />
          I'm a husband and a father of a lovely baby girl.  <br />
          I live in Alexandria, Egypt and I'm obsessed with its sea.  <br />
          I love to contribute to open source in my free time.  <br />
          I love Chess, running, singing, playing violin and above all JS <Icon theme='filled' style={{ color: '#e25555' }} type='heart' />.
        </p>
        <br />
        <h3 style={{ color: '#404040' }}>Academic Life</h3>
        <p style={{ marginBottom: 5 }}>MSc.Computer Science student at Alexandria University</p>
        <p style={{ marginBottom: 5 }}>Also, I do some research in the Software Engineering & ML</p>
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
          <a style={{ marginRight: 5 }} href="mailto:abdulhameed.abdulmuttalib@gmail.com" target="_blank" rel="noopener noreferrer">
            <span> email me </span>
            <Icon theme='filled' type='mail' style={{ fontSize: 17 }} />
          </a>
        </p>
        <br />
      </div>
    </Layout>
  )
}

export default IndexPage
