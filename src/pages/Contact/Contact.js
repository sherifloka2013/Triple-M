import React  from "react";
import contactUs from '../../assets/contactUs.jpg'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone , faSquareEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
const Contact= () => {
  
        return (
        <div id="contactContainer" className="container">
            <h2>
                GET IN TOUCH !
            </h2>
            
<div id="imgDiv">                   
            <img src={contactUs} alt="contactus"/>
</div>
            <div id="cardsDiv">
                <div id="mobile" className="card">
                <FontAwesomeIcon icon={faSquarePhone} />
                <h3>Mobile: 01090091008</h3>
                <h3>TELE FAX: +2 0224726066</h3>
                </div>
                <div id="mail" className="card">
                <FontAwesomeIcon icon={faSquareEnvelope} />
                <h3>email : info@triplem-const.com</h3>
                </div>  
                <div id="location" className="card">
                <FontAwesomeIcon icon={faLocationDot} />
                <h3 style={{textAlign: "center"}}>22 Saudi Company Buildings - Nozha Street - in front of the Air Defense House - madinat nasr -cairo-egypt</h3>
                </div> 
            </div>
            <iframe 
            width="100%"
           height="350px"
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Triple%20M%20Construction%7C%20%D8%AA%D8%B1%D8%A8%D9%84%20%D8%A7%D9%85%20%7C%20%D8%A7%D9%84%D9%88%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9%20%7C%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D9%88%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9%20%7C%20%D8%B7%D8%A7%D9%82%D8%A9%20%D8%B4%D9%85%D8%B3%D9%8A%D8%A9%20%D8%8C%20%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D9%85%D8%AD%D8%B7%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0">

            </iframe>


        </div>
        );
};

export {Contact};