import React from "react";
import './HomePage.css';
const HomePage = () => {
  

        return (
        <div id="homeContainer">
           <section id="intro">
                <p id="title">TRIPLE-M</p>
                <div id="slogan">
                <ul> 
                    <li><p>Constructions</p></li>
                    <li><span>Solar Energy</span></li>
                    <li><span>Renewable Energy</span></li>
                    <li>Maintenance</li>
                    <li>& More..</li>
                </ul> 
                </div>
           </section>
           
           <section class="timeline">
            <h3>Our History</h3>
                <ul>
                    <li>
                        <div>
                            <time>1998</time>
                            <h1>Safa Group</h1>
                            <p>
                            Established in 1998 as Constructions Company
                            Supply all kind of residential building and all kind of Infra Structure.
                            </p>
                            
                        </div>
                    </li>
                    <li>
                    <div>
                        <time>2015</time>
                        <h1>Triple M Construction</h1>
                        <p>
                        Established in 2015 as Renewable energy interested company

                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <time>2017</time>
                        <h1>EPSCO</h1>
                        <p>
                        EGYPTIAN POWER SAVING
COMPANY established in 2017

                        </p>
                        </div>
                    
                    </li>
                    <li>
                        <div>
                            <time>2017</time>
                            <h1>THE EGYPTIAN JORDANIAN COMPANY FOR
RENEWABLE ENERGY</h1>
                            <p>
                            Established in 2017</p>
                            
                        </div>
                    </li>
                    <li>
                    <div>
                        <time>2018</time>
                        <h1>Triple M Jordan</h1>
                        <p>Branch
Established branch in Jordan as executive arm for Triple M construction for Renewable Energy Projects

                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <time>2020</time>
                        <h1>Triple M Saudi Arabia Branch</h1>
                        <p>Established branch in KSA as executive arm for Triple M construction for Renewable Energy Projects

                        </p>
                        </div>
                    
                    </li>
                </ul>
            </section>
        </div>
        );
};

export { HomePage };