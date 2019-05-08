import React from 'react'
import Link from 'gatsby-link'
import './page-2.css'

import horse from "../images/gifs/giphy.gif"

const SecondPage = () => (
  <div>
    <div className="links">
    <table>
      <tr>
        <div >
          <th className="tables"><Link to="/">Main page</Link></th>
          <th className="tables"><Link to="https://www.youtube.com/thefredo1000">You Tube</Link></th>
          <th className="tables">Fun pix</th>
          </div>
        </tr></table></div>
    <h1>FUN PART :)</h1>
    <p>Welcome to the fun part!</p>
    <p>This is where we have fun.</p>
    <h3>FUN GIFS</h3>
    <img src={horse} style={{maxWidth:'100px'}}></img>
  </div>
)

export default SecondPage
