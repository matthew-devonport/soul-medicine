import React from 'react'
import Footer from './Footer'
import { HashRouter as NavLink, Link } from 'react-router-dom';


class About extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="aboutBackground">
                    <div className="contactHeader">
                        <div>
                        <div className="contactTitleFlex">
                            <img src="./img/logo.png" alt="Main Logo" className="aboutLogo"></img>
                            <div className="navLinks">
                            <Link to="/" className="gradient navLink">HOME</Link>
                            <Link to="/gallery" className="gradient navLink">GALLERY</Link>
                                <Link to="/contact" className="gradient navLink">CONTACT</Link>
                                <a href="https://soulmedicine.bandcamp.com/" target="_blank" className="gradient navLink">MEDITATION</a>
                            </div>

                            <div className="aboutTitle">ABOUT ME</div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutBody">
                        <div className="bodyMargin">
                            <div className="faceWrap">
                        <img src="./img/about-pic.jpg" alt="about pic" className="aboutPic"></img>
                        </div>
                            <div className="bodyText">Soul Medicine is an owner-operated business of Carol McMillan.<br /><br />
                        Carol resides in West Auckland, New Zealand, where she runs a busy clinic from home.
                        She is happily married to her partner in life, Warren, and is a mother of three now adult children.<br /><br />
                        Carol is an intuitive energy light worker, trained in Aquarian healing, Nutripuncture, homeobotanicals,
                        and Bach flowers. She holds an advanced diploma in massage and various forms of bodywork. She also specialises
                        in grief and trauma counseling, which includes working with teenagers.<br />
                        Carol has helped clients experiencing anxiety, bullying and abuse, PTSD, also corporate stress, and simply the
                        tension and pain of day-to-day living. Over many years working closely with her clients, Carol has developed a
                        unique style in these various healing modalities.<br /><br />
                        Having personally experienced trauma and crisis as a result of sexual abuse, neglect and addiction, she
                        understands the deep benefit of tools such as meditation.In order to move forward with ease, the past must be
                        addressed and then placed where it belongs. Meditation is an essential tool of this process as it brings focus
                        to the present moment, and the clarity of one’s true self.<br /><br />
                        Carol is thrilled to now bring this on-line aspect to Soul Medicine. The guided meditations are easy to follow,
                        and available for both clients and the public to purchase. By using them you will find yourself becoming less
                        reactive to the negative impact of life’s demands, and will feel empowered to take responsibility for your own healing journey.
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