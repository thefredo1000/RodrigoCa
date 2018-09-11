import React from 'react'


import './index.css'
import { Parallax, Background } from 'react-parallax';
import rodrigoSnow from '../images/meinthesnowbnw.png';
import logo from '../images/logoshadow.png';
import roult from '../images/roult.jpg';
import hack from '../images/hack.png';
import glasses from '../images/mewithglasses.jpg';


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
      paddingTop: '9%',
      paddingBottom: '9%',
      paddingLeft: '5%',
      paddingRight: '5%',
    }}>
    <img className="myLogo" src={logo} style={{maxHeight:'530px', borderRadius:"0px", textAlign:"left", }}></img></div>
    
    </div>

    </Parallax>

        <div className="introVideo"
    style={{
      margin:'0px',}}>
         <div style={{
                 backgroundColor:'#f4f4f4',
                 paddingTop:'33px',}}>
    <div style={{
                 maxWidth:'960px',
                 marginLeft:'auto',
                 marginRight:'auto',
                }}>
                <h2 style={{fontSize: '50px', padding: '10px',}}>Who am I?</h2>
                <div style={{
                
                justifyContent: 'center',
                display: 'flex',
                }}><div
                  style={{alignItems:'center',}}
                
                ><img className="imgRodrigoSnow" src={rodrigoSnow} style={{maxHeight:"400px", borderRadius:"5px", textAlign:"right", margin:'10px'}}></img></div>
                <div className="infoAboutMe"><h3>About Me</h3>
                <p className="infoTextAboutMe">I am a undergraduate student in computer science at the Tecnologico de Monterrey, with experience developing websites, iOS apps, videogames and software. I love learning new things and I am always open to learning better stuff for the future.</p></div>
                
                </div>
                <div className="infoTextAboutMe moreAboutMe" style={{textAlign:"left", maxWidth:'600px', margin:'0 auto', fontFamily: 'Ubuntu', lineHeight:''}}><p style={{margin:'0 30px'}}>I've had several experiences programming, which they have brought me more than knowledge, they have a special place in my heart. I've had experiences programming in Python, C, C#, Swift and Javascript, you can take a look at my projects, which those game me several skills, technical, analytical and social, helping me to get the job done.</p></div>
                <div style={{height:"20px"}}></div>
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
          <h1 className='imUrFav'>PROJECTS</h1>
        </div>

    </div>   
     </Parallax>

    <div style={{
                 backgroundColor:'#f4f4f4',
                 paddingTop:'33px',}}>
    <div style={{
                 maxWidth:'1100px',
                 marginLeft:'auto',
                 marginRight:'auto'
                }}>
                <h2 style={{fontSize: '50px', padding: '10px'}}>Main Projects</h2>
                <div style={{
                
                justifyContent: 'center',
                display: 'flex',
                }}><div
                  style={{alignItems:'center', padding:'10px'}}
                
                ><img className="imgProject" src={roult} style={{maxHeight:"300px", borderRadius:"5px", textAlign:"right", marginBottom:'0'}}></img></div>
                </div>                
                <div className="infoAboutProject" style={{textAlign: 'center', margin:'0 auto', maxWidth:'500px', padding:'20px', paddingTop:'10px'}}><h3 style={{fontSize:'27'}}>ROULT 4403</h3>
                <p className="infoTextAboutProject">
                I joined FRC (FIRST Robotic Competition) in 2018 with the team ROULT 4403. My main area was the programming subdivision but I was highly involved in the mechatronics and chairmans subdivisions. This experience taught me more than just robotics, but it also taught me social skills as leadership and communication. I had international experience assisting to the Little Rock, Arkansas FRC regional.                </p>
                </div>
                
                <div style={{
                
                justifyContent: 'center',
                display: 'flex',
                }}>
                <div
                  style={{alignItems:'center', padding:'10px'}}
                
                ><img className="imgProject" src={hack} style={{maxHeight:"300px", borderRadius:"5px", textAlign:"right", marginBottom:'0'}}></img></div>
                </div>                
                <div className="infoAboutProject" style={{textAlign: 'center', margin:'0 auto', maxWidth:'500px', padding:'20px', paddingTop:'10px'}}><h3 style={{fontSize:'27'}}>HACK MTY 2018</h3>
                <p className="infoTextAboutProject">
                I participated in the Hack MTY 2018: a Hackathon in Tecnologico de Monterrey, in which I created a website with a team of developers. I always try to improve and gain as much knowledge as possible. I also enjoy these kind of events because I‘m always open to make new friends and creating experiences.                </p>
                </div></div>

      </div>
      <div style={{margin: "0 auto", height: "50px", backgroundColor: "#262626", fontFamily: "Ubuntu",justifyContent: 'center', display: 'flex', padding:'10px', color:'white'}} >Website made by Rodrigo Casale :)</div>
    </div>
  
)
console.log("🅡🅞🅓🅡🅘🅖🅞🅒🅐.🅢🅐🅛🅔 𝖜𝖆𝖘 𝖍𝖊𝖗𝖊 :)")
export default IndexPage
