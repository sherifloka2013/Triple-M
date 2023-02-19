import React  from "react";
import axios from "axios";
import contentBG from '../../assets/contentBG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye , faEye , faPeopleCarryBox,
         faPeopleArrows,faSeedling,faArrowsToEye , faArrowUpRightDots, faTrowelBricks} from '@fortawesome/free-solid-svg-icons'

         const baseURL = "http://78.47.134.53:8055/graphql";

         var aboutData ={};

const About= () => {
    var data = JSON.stringify({
      query: `{
      __typename
      About_Us {
        Header
        date_created
        date_updated
        id
        Content_A
        Content_B
        status
      }
    }`,
      variables: {}
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: baseURL,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        
       aboutData = {h3:(response.data['data']['About_Us'][0]['Header'])
       ,p1:(response.data['data']['About_Us'][0]['Content_A']),
       p2:(response.data['data']['About_Us'][0]['Content_B'])};
       console.log(aboutData);
 
    })
    .catch(function (error) {
      console.log(error);
    });
        return (
        <div id="aboutContainer" className="container">
            <h2>
                About us 
            </h2>
            <h3>{aboutData.h3}</h3>
            <div id="firstParag"> 
                <div>
                    <p>{aboutData.p1}</p>
                    <p>{aboutData.p2}</p>
                </div>
                <img src={contentBG} alt='Company profile'/>
            </div>
            <hr></hr>
            <div id="secondParag">
                <div id="purpose" className="card">
                    <FontAwesomeIcon icon={faBullseye} />
                    <h3>Purpose</h3>
                    <p>To be a leader in the construction especially renewable energy industry by providing enhanced services, relationship and profitability for all our customers.</p>
                </div>
                <div id="vision" className="card">
                <FontAwesomeIcon icon={faEye} />
                    <h3>vision</h3>
                    <p>To provide quality services that exceed the expectations of our esteemed customers and help our country to minimize power problem by providing all concerned service for effective renewable power projects.</p>
                </div>
                <div id="mission" className="card">
                <FontAwesomeIcon icon={faPeopleCarryBox} />
                    <h3>Mission</h3>
                    <p>To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.</p>
                </div>
            </div>
            <hr></hr>
            <div id="thirdParag">
                <div id="values">
                    <h3>Core Values</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faPeopleArrows} />We believe in treating our customers with respect and faith.</li>
                            <li><FontAwesomeIcon icon={faSeedling} />We grow through creativity, invention and innovation</li>
                            <li><FontAwesomeIcon icon={faArrowsToEye} />We integrate honesty, integrity and business ethics into all aspects of our business functioning</li>
                        </ul>
                </div>
                <div id="goals">
                <h3>Goals</h3>
                
                <ul>
                    <li><FontAwesomeIcon icon={faArrowUpRightDots} />Increase the assets and investments of the company to support the development of services</li>
                    <li><FontAwesomeIcon icon={faTrowelBricks}/>To build good reputation in the field of construction and renewable energy projects and become a key player in the future technology industry.</li>
                </ul>
                </div>
            </div>

            <hr></hr>
            <div id="forthParag">
                <div id="scope">
                            <h3>Scope of Work</h3>
                                <p style={{textAlign: "center"}}>Triple m Construction Company providing all construction works and renewable power service and technology. The company undertakes all maintenance duties for all civil and electrical projects.</p> 
                </div>
                <hr></hr>
                <div id="financial">
                        <h3>Financial Considerations</h3>
                        
                        <p style={{textAlign: "center"}}>The company expects to reach the desired profits in the first year and does not anticipate serious cash flow problems. We believe that the average profitability per month for the first 3 years will be sufficient. Our goals to make profits by  providing effective service.</p>
                </div>
            </div>
            <hr></hr>
        </div>
            
        );
};

export {About};