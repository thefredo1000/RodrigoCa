import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import { Parallax, Background } from 'react-parallax';
import four from '../images/4335.ico'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={"Rodrigo Casale"}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      href={four}
    />

    <link rel="shortcut icon" href={four} />

     <div> {children()}</div>

  </div>
)


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
