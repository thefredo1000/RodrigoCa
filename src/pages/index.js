import React from 'react'


import './index.css'
import { Parallax, Background } from 'react-parallax';
import rodrigoSnow from '../images/meinthesnowbnw.png';
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
      paddingLeft: '5%',
      paddingRight: '5%',
    }}>
    <img className="myLogo" src={logo} style={{maxHeight:'530px', borderRadius:"0px", textAlign:"left",}}></img></div>
    
    </div>

    </Parallax>

        <div className="introVideo"
    style={{
      margin:'0px',}}>
         <div style={{
                 backgroundColor:'#FFFFFF',
                 paddingTop:'50px',}}>
    <div style={{
                 maxWidth:'960px',
                 marginLeft:'auto',
                 marginRight:'auto',
                }}>
                <h2 style={{fontSize: '50px', padding: '10px'}}>Who am I?</h2>
                <div style={{
                
                justifyContent: 'center',
                display: 'flex',
                }}><div
                  style={{alignItems:'center',}}
                
                ><img className="imgRodrigoSnow" src={rodrigoSnow} style={{maxHeight:"400px", borderRadius:"5px", textAlign:"right", margin:'10px'}}></img></div>
                <div className="infoAboutMe"><br></br><h3>Im a cool kid</h3>
                <p className="infoTextAboutMe">I am a young programmer :)</p></div>
                </div>
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
                <h2 style={{fontSize: '40px', padding: '10px'}}>Who am I?</h2>
                <div><img src={rodrigoSnow} style={{height:"400px", borderRadius:"5px", textAlign:"center", margin:'10px'}}></img></div>
      </div>

    </div>
    </div>
  
)
console.log("🅡🅞🅓🅡🅘🅖🅞🅒🅐.🅢🅐🅛🅔 𝖜𝖆𝖘 𝖍𝖊𝖗𝖊 :)")
export default IndexPage
