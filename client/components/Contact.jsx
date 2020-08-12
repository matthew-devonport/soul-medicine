import React from 'react'
import Footer from './Footer'
import { HashRouter as NavLink, Link } from 'react-router-dom';


class About extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="contactHeader">
                        <div>
                        <div className="contactFlex">
                            <img src="./img/logo.png" alt="Main Logo" className="aboutLogo"></img>
                            <div className="navLinks">
                            <Link to="/" className="gradient navLink">HOME</Link>
                                <a className="gradient navLink">GALLERY</a>
                                <Link to="/about" className="gradient navLink">ABOUT</Link>
                                <a href="https://soulmedicine.bandcamp.com/" target="_blank" className="gradient navLink">MEDITATION</a>
                            </div>

                            <div className="aboutTitle">CONTACT ME</div>
                            </div>
                        </div>
                    </div>
                    <div className="contactBody">
                        <div className="contactInfo">We would love to hear from you!<br /><br /> 
                        If you have any questions or queries, please click one of the preferred contact methods below!
                        </div>
                <a href="tel:0211611540" className="contactColumn">
               <img src="./img/phone.png" alt="Phone Icon" className="phoneLogo"></img>  
               </a>
               <a href="mailto:carolmcm@xtra.co.nz"  className="contactColumn">  
               <img src="./img/email.png" alt="Email Icon" className="emailLogo"></img>
               </a>
                    </div>
                    <div className="footerFlex">
                        <Footer />
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default About