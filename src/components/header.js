import React from 'react'
import Link from 'gatsby-link'


const Header = ({ siteTitle }) => (
  <div 
  id='headerHeight'
    style={{
      background: '#FFC03A',
      width: '100%',
      paddingTop: '6px',
      paddingBottom: '12px'
    }}
  >
    <div 
      style={{
        margin: '0 auto',
        maxWidth: 1300,
      }}
    >
      <h1 style={{ margin: 0,
            fontFamily: 'Oswald',}}>
        <Link className='headerText'
          to="/"
          style={{
            color: '#0C0B04',
            textDecoration: 'none',
            margin: '1rem 1.0875rem 1rem'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
