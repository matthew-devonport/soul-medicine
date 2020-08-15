import React from 'react'
import Footer from './Footer'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
            <div className="background">
            <div className="mainFlex">
            <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
            <div className="flexStatement"><i className="statement">"Empowering others with healing tools"</i>
            </div>
            <div className="homeLinks">
            <Link to="/about" className="gradient link">ABOUT</Link>
            <Link to="/gallery" className="gradient link">GALLERY</Link>
             <Link to="/contact" className="gradient link">CONTACT</Link>
             <a href="https://soulmedicine.bandcamp.com/" target="_blank" className="gradient link">MEDITATION</a>
            </div>
            </div>
            <div className="footerFlex">
            <Footer />
            </div>
            </div>
            </React.Fragment>

        )
    }
}


export default Home