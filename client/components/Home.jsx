import React from 'react'



class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
            <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
            <div className="homeLinks">
             <a className="gradient link">ABOUT</a>
             <a className="gradient link">GALLERY</a>
             <a className="gradient link">CONTACT</a>
             <a className="gradient link">SOUND</a>
            </div>

            </React.Fragment>

        )
    }
}


export default Home