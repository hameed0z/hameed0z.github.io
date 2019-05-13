/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import "./layout.css"
import React, { useState } from "react"
import PropTypes from "prop-types"
import Image from "../components/image"

import { StaticQuery, graphql } from "gatsby"
import {
  Layout, Menu, Icon,
} from 'antd';

const { Content, Footer } = Layout;

//import Header from "./header"

const Layouts = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('0');
  const changeTheme = (value) => {
    value = value === 'light' ? 'dark' : 'light'
    setTheme(value);
  }
  const handleClick = ({ key }) => {
    console.log('click ', key);
    if (key === '3') {
      changeTheme(theme)
    } else {
      setCurrent(key);
    }
  }

  return (<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ minHeight: '100vh', display: 'flex' }}>


        <Menu theme={theme} onClick={handleClick} defaultSelectedKeys={['1']} selectedKeys={[current]} style={{ flex: 1 }}
        >
          <Image />
          <Menu.Item key="0">
            <Icon type="user" />
            <span>me</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="desktop" />
            <span>works</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="file" />
            <span>blog</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file" />
            <span>dark mode</span>
          </Menu.Item>
        </Menu>
        <Layout style={{ flex: 5 }}>
          <Content >
            {children[current]}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018 Hameed, All rights reserved.
          </Footer>
        </Layout>
      </div>
    )}
  />)
}


Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layouts
