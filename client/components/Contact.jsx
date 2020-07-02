import React from 'react'
import Footer from './Footer'


class Contact extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="contactHeader">
                        <div>
                            <img src="./img/logo.png" alt="Main Logo" className="contactLogo"></img>
                            <div className="contactTitle">CONTACT US</div>
                        </div>
                    </div>
                    <div className="contactBody">
                    <div className="contactFlex">
                        <div className="contactLink">Home</div>
                        <div className="contactLink">Mobile</div>
                        <div className="contactLink">E-mail</div>
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


export default Contact