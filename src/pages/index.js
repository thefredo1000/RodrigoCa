import React from 'react'


import './index.css'
import { Parallax, Background } from 'react-parallax';
import rodrigoSnow from '../images/meinthesnow.jpg';
import logo from '../images/logo.png';


const IndexPage = () => (


  <div>

    <Parallax    strength={-200}  bgImage={require('../images/rodrigoblackandwhite.png')}>

    <div style={{height:'805px'}}>                
    
    <div ><img src={logo} style={{height:"400px", borderRadius:"0px", textAlign:"center", margin:'200px 475px', }}></img></div>
    
    </div>

    </Parallax>

        <div className="introVideo"
    style={{
      margin:'0',}}>
         <div style={{
                 backgroundColor:'#CDCFD0',
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
    <Parallax
    blur={{ min: -0, max: 0 }}
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
      padding: '1rem 1.0875rem 1rem',
      paddingTop: '2.5rem',
      marginBottom:'0'
    }}> 

        <div className='cobo'>
          <h1 className='imUrFav'>ABOUT ME...</h1>
        </div>

    </div>   
     </Parallax>

    <div style={{height:'1000px',
                 backgroundColor:'#f2f2f5',
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
