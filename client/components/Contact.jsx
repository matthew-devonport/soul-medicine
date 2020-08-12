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
                        <div className="mainFlex">
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
                    <div className="aboutBody">
                        <div className="bodyMargin">
                            <div className="picWrap">
                        </div>
                            <div className="bodyText">
                        </div>
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


export default About