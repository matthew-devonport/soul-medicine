import React from 'react'
import Footer from './Footer'


class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
            <div className="background">
            <div className="contact">
                <div className="contactArea">
                <img src="./img/phone.png" alt="Phone Logo" className="phoneLogo"></img>
                    <a className="contactLink">09 9837 6288 |</a>
                    <a className="contactLink">021 161 1540</a>
                </div>
            </div>
            <div className="mainFlex">
            <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
            <div className="flexStatement"><i className="statement">"Empowering others with healing tools"</i>
            </div>
            <div className="homeLinks">
             <a className="gradient link">ABOUT</a>
             <a className="gradient link">GALLERY</a>
             <a className="gradient link">CONTACT</a>
             <a className="gradient link">MEDITATION</a>
            </div>
            </div>
            </div>
            <Footer />
            </React.Fragment>

        )
    }
}


export default Home