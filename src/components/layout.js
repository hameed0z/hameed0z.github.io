/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import "./layout.css"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link, navigate } from "gatsby"
import Gesture from 'rc-gesture';

import { Layout, Menu, Icon } from 'antd';
import Image from './image'
const { Footer } = Layout;
const Layouts = ({ children, location }) => {
  const [mobile, setDim] = useState(false);
  const [current, setCurrent] = useState('0');

  useEffect(() => {
    setCurrent(location)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [location])

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

  const handleSwipeLeft = () => {
    const opt = {
      '/': 'work',
      'work': 'blog',
      'blog': 'blog'
    }
    navigate(opt[location])
  }

  const handleSwipeRight = () => {
    const opt = {
      '/': '/',
      'work': '/',
      'blog': 'work'
    }
    navigate(opt[location])
  }

  const renderFooter = () => (
    <Footer style={{ textAlign: 'center', padding: 17 }}>
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <a style={{ paddingBottom: 2 }} href='https://www.github.com/hameed0z' target="_blank" rel="noopener noreferrer">
          <Icon type='github' style={{ fontSize: 17 }} />
        </a>
        <a style={{ paddingBottom: 2, marginLeft: 15, marginRight: 15 }} href='https://www.linkedin.com/in/hameed0z' target="_blank" rel="noopener noreferrer">
          <Icon type='linkedin' style={{ fontSize: 17 }} />
        </a>
        <a style={{ paddingBottom: 2 }} href='https://www.twitter.com/hameed0z' target="_blank" rel="noopener noreferrer">
          <Icon type='twitter' style={{ fontSize: 17 }} />
        </a>
      </div>
      ©{new Date().getFullYear()} Abdulhameed Abdulmuttalib, All rights reserved.
        </Footer>
  )

  const gestureRender = (children) => {
    if (mobile) {
      return (
        <Gesture
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        >
          <div style={{ backgroundColor: 'white', overflowY: 'auto', flex: 1 }}>
            {children}
          </div>
        </Gesture>
      )
    } else {
      return (
        <div style={{ backgroundColor: 'white', overflow: 'auto', flex: 5, }}>
          {children}
        </div>)
    }
  }

  const renderMenu = () => {
    return (
      <Menu
        theme={'light'} onClick={handleClick} selectedKeys={[current]}
        mode={mobile ? 'horizontal' : 'inline'}
        inlineCollapsed={mobile ? false : false}
        style={{ position: 'static', display: mobile ? 'flex' : 'inline', justifyContent: mobile ? 'center' : 'normal', flex: mobile ? 0 : 1, flexGrow: 1, flexShrink: 1, flexBasis: 1 }}
      >
        <Image />
        <Menu.Item key="/" >
          <Link
            to="/"
            activeStyle={{ color: "#62b4fb" }}
          >
            <Icon type="user" />
            <span>me</span>
          </Link>

        </Menu.Item>
        {/* <Menu.Item key="work">
          <Link
            to="/work"
          >
            <Icon type="desktop" />
            <span>work</span>
          </Link>

        </Menu.Item> */}
        <Menu.Item key="blog">
          <Link
            to="/blog"
          >
            <Icon type="book" />
            <span>blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    )
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
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: mobile ? 'column' : 'row', overflowY: 'hidden' }}>
          {renderMenu()}
          {gestureRender(children)}
          {mobile && renderFooter()}
        </div>
        {!mobile && renderFooter()}
      </div>
    )}
  />)
}

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layouts
