import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone , faSquareEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => 
{
   return( 
   <footer>
        <div id="footer">
            <div id="footerContact">
                <div id="footerLocation" className="footerContactSection">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="contactData">
                            <h3>Find us</h3>
                            <span>22 Saudi Company Buildings - Nozha Street - in front of the Air Defense House - madinat nasr -cairo-egypt</span>
                    </div>
                </div>
                <div id="footerMobile" className="footerContactSection">
                    <FontAwesomeIcon icon={faSquarePhone} />
                    <div className="contactData">
                            <h3>Call us</h3>
                            <span>Mobile: 01090091008</span>
                            <span>Fax: 01090091008</span>
                    </div>
                </div>
                <div id="footerMail" className="footerContactSection">
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                    <div className="contactData">
                            <h3>Mail us</h3>
                            <span>info@triplem-const.com</span>
                    </div>
                </div>    
            </div>
            <div id="footerSecondSection">
                <div id="footerLogo">
                    <figure>
                        <Link to="/">
                        <img src={logo} alt="MMM logo"/>
                        </Link>
                    </figure>
                    <p>Triple M Construction Company has been established as Construction Company in Egypt 1998. 
                        Our traditional business model is based on the public contracting.</p>
                </div>
                <div id="footerAbout">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/projectReference">Projects</Link></li>
                        <li><Link to="/REEF">R & D</Link></li>
                    </ul>
                </div>
                <div id="footerSocial">
                    <h3>Follow us</h3>
                   <Link target="_blank" to="https://www.facebook.com/triplemconst"><FontAwesomeIcon icon={faFacebook} id="fb"/></Link> 
                    <Link target="_blank" to="https://triplem-const.com/#"><FontAwesomeIcon icon={faTwitter} id="twitter"/></Link>
                    <Link target="_blank" to="https://ae.linkedin.com/company/triple-m-construction"><FontAwesomeIcon icon={faLinkedin} id="linkedin"/></Link>
                    <Link target="_blank" to="https://triplem-const.com/#"><FontAwesomeIcon icon={faYoutube} id="youtube"/></Link>
                </div>
            </div> 
        </div>
        <div id="copyRights">
<span>Copyrights © 2023, Developed by <span style={{marginLeft:"3px",color:"#f66216",textDecoration:"underline",cursor:"pointer"}}>Alpha SS</span></span>
        </div>
   </footer>


   );
}

export {Footer};