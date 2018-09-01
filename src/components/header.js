import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div 
  id='headerHeight'
    style={{
      background: '#199c05',
      width: '100%',
    }}
  >
    <div 
      style={{
        margin: '0 auto',
        maxWidth: 960,
        maxHeight: 200,
        padding: '1.45rem 1.0875rem',
        paddingTop: '1rem',
      }}
    >
      <h1 style={{ margin: 0,
            textAlign: 'center',
            fontFamily: 'Catamaran'}}>
        <Link id='headerText'
          to="/"
          style={{
            color: '#f2f2f5',
            textDecoration: 'none',
            fontSize: '50px',

          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
