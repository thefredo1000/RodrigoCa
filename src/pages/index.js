import React from 'react'


import './index.css'
import { Parallax, Background } from 'react-parallax';
import rodrigoSnow from '../images/meinthesnow.jpg';


const IndexPage = () => (


  <div>
    <div className="introVideo"
    style={{
      margin:'0',}}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vPs5xUTvoHo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      
    </div>

    <Parallax
    blur={{ min: -20, max: 20 }}
    bgImage={require('../images/rodrigobackground2.png')}
    bgImageAlt="rorris"
    strength={100}
    bgStyle= {{
      backgroundPosition: 'center center',

    }}
    >
      
    <div 
    style={{
      margin: '0 auto',
      maxWidth: 1300,
      maxHeight: '500px',
      padding: '1rem 1.0875rem 1.45rem',
      paddingTop: '3rem',
      marginBottom:'0'
    }}> 

        <div className='cobo'>
          <h1 className='imUrFav'>ABOUT ME...</h1>
        </div>

    </div>   
     </Parallax>

    <div style={{height:'1000px',
                 backgroundColor:'#f2f2f5',
                 marginTop:'-26px',
                 paddingTop:'70px',}}>
    <div style={{
                 maxWidth:'960px',
                 marginLeft:'auto',
                 marginRight:'auto'
                }}>
                <h2 style={{fontSize: '40px', padding: '10px'}}>¿Quien soy?</h2>
                <div><img src={rodrigoSnow} style={{height:"400px", borderRadius:"5px", textAlign:"center", margin:'10px'}}></img></div>
      </div>

    </div>
    </div>
  
)

export default IndexPage
