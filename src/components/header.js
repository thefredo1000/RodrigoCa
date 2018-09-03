import React from 'react'
import Link from 'gatsby-link'


const Header = ({ siteTitle }) => (
  <div 
  id='headerHeight'
    style={{
      background: '#FFC03A',
      width: '100%',
    }}
  >
    <div 
      style={{
        margin: '0 auto',
        maxWidth: 960,
        maxHeight: 200,
      }}
    >
      <h1 style={{ margin: 0,
            fontFamily: 'Oswald',}}>
        <Link className='headerText'
          to="/"
          style={{
            color: '#0C0B04',
            textDecoration: 'none',
            fontSize: '45px',
            marginTop: '-5px'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
