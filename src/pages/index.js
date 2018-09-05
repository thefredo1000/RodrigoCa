import React from 'react'


import './index.css'
import { Parallax, Background } from 'react-parallax';
import rodrigoSnow from '../images/meinthesnow.jpg';
import logo from '../images/logo.png';


const IndexPage = () => (


  <div>

    <Parallax    strength={100}  bgImage={require('../images/rodrigoblackandwhite.png')}>

    <div style={{}}>                
    
    <div  
    style={{
      alignItems:'center',
      justifyContent: 'center',
      display: 'flex',
      margin: 'auto auto',
      maxWidth: 1300,
      paddingTop: '10%',
      paddingBottom: '10%',
    }}>
    <img className="myLogo" src={logo} style={{maxHeight:'530px', borderRadius:"0px", textAlign:"center",}}></img></div>
    
    </div>

    </Parallax>

        <div className="introVideo"
    style={{
      margin:'0px',}}>
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
    bgImage={require('../images/rodrigobackgroundbnw.png')}
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
