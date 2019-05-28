/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import "./layout.css"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import {
  Layout, Menu, Icon,
} from 'antd';
import Image from './image'
const { Footer } = Layout;

const Layouts = ({ children, location }) => {
  const [mobile, setDim] = useState(false);
  const [current, setCurrent] = useState('0');

  useEffect(() => {
    setCurrent(location)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, ['location'])

  const handleResize = () => {
    if (window.innerWidth < 650) {
      setDim(true)
    } else {
      setDim(false)
    }
  }

  const handleClick = ({ key }) => {
    setCurrent(key);
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
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: mobile ? 'column' : 'row' }}>
          <Menu
            theme={'light'} onClick={handleClick} selectedKeys={[current]}
            mode={mobile ? 'horizontal' : 'inline'}
            inlineCollapsed={mobile ? false : false}
            style={{ display: mobile ? 'flex' : 'inline', justifyContent: mobile ? 'center' : 'normal', flex: mobile ? 0 : 1 }}
          >
            {!mobile && <Image />}
            <Menu.Item key="/" >
              <Link
                to="/"
                activeStyle={{ color: "#62b4fb" }}
              >
                <Icon type="user" />
                <span>me</span>
              </Link>

            </Menu.Item>
            <Menu.Item key="work">
              <Link
                to="/work"
              >
                <Icon type="desktop" />
                <span>work</span>
              </Link>

            </Menu.Item>
            <Menu.Item key="blog">
              <Link
                to="/blog"
              >
                <Icon type="book" />
                <span>blog</span>
              </Link>
            </Menu.Item>
          </Menu>
          <div style={{ backgroundColor: 'white', overflowY: 'auto', flex: 5 }}>
            {children}
          </div>
        </div>
        <Footer style={{ textAlign: 'center', padding: 17 }}>
          <div style={{ display: 'flex', justifyContent: 'center', }}>
            <a style={{ paddingBottom: 2 }} href='https://www.github.com/7ameed' target="_blank" rel="noopener noreferrer">
              <Icon type='github' style={{ fontSize: 17 }} />
            </a>
            <a style={{ paddingBottom: 2, marginLeft: 15, marginRight: 15 }} href='https://www.linkedin.com/in/abdelhameed-m' target="_blank" rel="noopener noreferrer">
              <Icon type='linkedin' style={{ fontSize: 17 }} />
            </a>
            <a style={{ paddingBottom: 2 }} href='https://www.twitter.com/hameed0z' target="_blank" rel="noopener noreferrer">
              <Icon type='twitter' style={{ fontSize: 17 }} />
            </a>
          </div>
          ©{new Date().getFullYear()} Hameed, All rights reserved.
        </Footer>
      </div>
    )}
  />)
}


Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layouts
