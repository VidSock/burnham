import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/pick6golf-final.svg'
// import Install from '../Install'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }











// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}

hr{ 
  border:1px dotted #999;
}



@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  
  
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
  <Helmet>
    <title>{meta_title}</title>
    <meta name='description' content={meta_description} />
    <html className="fullhead" />
    
  </Helmet>
  
  





<CustomBox>
<div className="intro">
<div className="outer">
  


        
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<div className="no-app"><Image className="spotimg no-app" alt="Ad2 Inc Marketing and PR" filename="Burnham-Drugs-Homepage.jpg" /></div>
<div className="has-app"><Image className="spotimg has-app" alt="Ad2 Inc Marketing and PR" filename="Burnham-Drugs-Hero.jpg" /></div>
<br />



<div className="has-app" style={{}}>
<h2 style={{textAlign:'center', width:'100%', display:'block'}}>Burnham Drugs Escatawpa: (228) 475-3909</h2>

  <div style={{display:'flex', padding:'1rem', margin:'1rem', justifyContent:'space-around'}}>
			<a className="imgbox shadow" href="https://www.refillrx.com/signup/locatepharmacy.php"  role="button" rel="noopener" style={{border:'1px solid #000', borderRadius:'8px', overflow:'hidden', position:'relative', padding:'1rem', margin:'1rem', background:'#266B58', color:'#fff'}}>
							<span className="fl-button-text">Register - Burnham Drugs Escatawpa</span>
					</a>
          <a className="imgbox shadow" href="https://www.refillrx.com/login.php" target="_blank" role="button" rel="noopener" style={{border:'1px solid #000', borderRadius:'8px', overflow:'hidden', position:'relative', padding:'1rem', margin:'1rem auto', background:'#266B58', color:'#fff'}}>
							<span className="fl-button-text">Log in - Burnham Drugs Escatawpa</span>
					</a>
  </div>
</div>


<div class="no-app">
<h1 className="homeheader">Welcome to Burnham Drugs</h1>

<p>Burnham Drugs is a locally owned and operated independent pharmacy. Quality service, competitive pricing and a genuine concern for our customers’ health has been the key to our success for more than 100 years. </p>

<p>
Burnham Drugs offers free delivery service for your prescriptions, a wide selection of quality gifts for every occasion, and pharmaceutical compounding through our Vital Care division and many more services. View the services available at each of our store locations.
</p>

<p><strong>The health and safety of our customers, staff, families, and communities is our first priority.</strong></p>

<p>If you or anyone in your household has tested positive for the coronavirus or is not feeling well and/or have a fever, please let us know in advance and we will provide prescription delivery or curbside service.</p>

<p>As a locally owned pharmacy, we are an integral part of the community. The owners, pharmacists, and store managers are members and supporters of local civic organizations, associations, and churches. We know our customers and their family members and have been honored to serve them for generations. 
</p>

<p>At Burnham Drugs, our mission is to provide the best possible healthcare to our patients. Our vision is to rejuvenate the old-time drug store where the pharmacist and staff are available to personally assist you with your medical needs. </p>
</div>


<div class="has-app">
	<p>If you are new to our online Prescription Refill services, please choose <strong>Register for Prescription Refills</strong>. For new accounts you will need the following information:</p>
<ul> 	<p></p>
<li>Escatawpa Zip Code: <strong>39552</strong></li>
<p> 	</p>
<li>The last four digits of Escatawpa's phone number: <strong>3909</strong></li>
<p> 	</p>
<li>A previously filled prescription number to verify your identity.</li>
<p></p></ul>
<p><strong>None of your information is stored online, this is used for verification and to authenticate your patient information. The Rx number provided will not be refilled or altered.</strong></p>
</div>



{/* <div style={{display:'block', height:'66vh'}}></div> */}

</div>
</div>
    


</div>



















  
  </div>
  
  <div className="outer" style={{ display:'none', position:'relative', zIndex:'1'}}>
    <Contact className="container contactform" />
  </div>
  
  <br />
  
  
  </CustomBox>
  

  
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
  blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
