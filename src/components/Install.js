import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
// import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";

const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 1s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}




@media (display-mode: standalone) {
  /* All installed PWAs */
  #installer{display: none !important;}
}
	
@media (hover: hover) {
#installer{display: none !important;}
}
	


`

const Install = () => (
<CustomBox style={{}} className="installer">




<div id="installer" className="bounceInDown" style={{display:'flex', justifyContent:'center', alignItems:'center', position: 'fixed', top:'60px', width:'100%', zIndex:'2', borderRadius:'8px', }}>



<CookieConsent
	debug={false}
	location="none"
	style={{ color:'inherit', width:'auto', background:'inherit',  alignItems:'inherit',  textAlign:'left', justifyContent:'center', margin:'0 auto', top:'60px', maxWidth:'600px', position:'', border:'0px solid red', }}
    className=""
    buttonText="Ok - I got it!"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "13px", bottom:'8%', position:'absolute', display:'flex', alignContent:'', color:'inherit', border:'0px solid' }}
    expires={10}
    cookieName="burnhamdrugs.com-install-cookie"
>


<div className="container" style={{padding:'2rem 1rem', border:'1px solid #000', borderRadius:'8px',}}>


	
	<div style={{textAlign:'center', fontSize:'140%',}}>Install Our App!</div>
	<br />

  <div style={{fontSize:'100%', textAlign:'center',}}>Install Burnham Drugs App! <br />Just add it to your home screen to install it.<br /><br /> Prescription refills right at your fingertips</div>
  <br />
	<div style={{fontSize:'80%', textAlign:'center',}}>Install the app in 2 easy steps:</div>
	<br />
	
    <div style={{fontSize:'100%', textAlign:'center', display:'flex', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'', display:'flex', alignContent:'', marginBottom:'1rem', padding:'1rem'}}>
 <FiShare style={{fontSize:'350%', marginLeft:'0rem', marginRight:'1rem', float:'',}} />
  1) Press<br />the 'Share' button 
</div>
   
    
 <div style={{textAlign:'', display:'flex', alignContent:'', marginBottom:'1rem', padding:'1rem'}}>
 <FaRegPlusSquare style={{fontSize:'350%', marginLeft:'0rem', marginRight:'1rem', float:'',}} /> 
 
2) Press<br /> 'Add to Home Screen'
 </div>
 
 </div>
 
    <br />
    <br />
    </div>
    
</CookieConsent>
</div>


</CustomBox>
)

export default Install