import React from 'react'
import Footer from './Footer'
import PopUpBox from "./PopUpBox"

import { HashRouter as NavLink, Link } from 'react-router-dom';

const images = [
    { id: 1, thumbnail: "/img/1-1.jpg", fullSize: "/img/1-2.jpg" },
    { id: 2, thumbnail: "/img/2-1.jpg", fullSize: "/img/2-2.jpg" },
    { id: 3, thumbnail: "/img/3-1.jpg", fullSize: "/img/3-2.jpg" },
    { id: 4, thumbnail: "/img/4-1.jpg", fullSize: "/img/4-2.jpg" },
    { id: 5, thumbnail: "/img/5-1.jpg", fullSize: "/img/5-2.jpg" },
]


class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            popupImageId: null,
        }
    }

    togglePopup(id = null) {
        this.setState((state, props) => ({
            popupImageId: id,
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="contactHeader">
                        <div>
                            <div className="contactTitleFlex">
                                <img src="./img/logo.png" alt="Main Logo" className="aboutLogo"></img>
                                <div className="navLinks">
                                    <Link to="/" className="gradient navLink">HOME</Link>
                                    <Link to="/contact" className="gradient navLink">CONTACT</Link>
                                    <Link to="/about" className="gradient navLink">ABOUT</Link>
                                    <a href="https://soulmedicine.bandcamp.com/" target="_blank" className="gradient navLink">MEDITATION</a>
                                </div>
                                <div className="galleryTitle">GALLERY</div>
                            </div>
                        </div>
                    </div>
                    <div className="galleryBody">
                        <div className="picWrap">
                        <div className="pics">
                            {images.map((image, index) => {
                                return (
                                    <a
                                        key={image.id}
                                        className="pic"
                                        onClick={() => this.togglePopup(image.id)}
                                    >
                                        <img src={image.thumbnail}></img>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                    <div className="footerFlex">
                        <Footer />
                    </div>
                </div>
                {this.state.popupImageId !== null && (
                    <PopUpBox
                        togglePopup={() => this.togglePopup(null)}
                    >
                        <div>
                            <img
                                src={
                                    images.find(image => image.id === this.state.popupImageId).fullSize
                                }
                                className="picOne"
                            ></img>
                        </div>
                    </PopUpBox>
                )}
            </React.Fragment>
        )
    }
}


export default About
