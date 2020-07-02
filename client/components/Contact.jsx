import React from 'react'
import Footer from './Footer'


class Contact extends React.Component {


    render() {
        return (
            <React.Fragment>
            <div className="background">
            <img src="./img/logo.png" alt="Main Logo" className="contactLogo"></img>    
            <div className="contactFlex">
            <Footer />
            </div>
            </div>
            </React.Fragment>

        )
    }
}


export default Contact