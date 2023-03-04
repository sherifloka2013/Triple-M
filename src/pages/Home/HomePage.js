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
           <section id="History">
                <div>
                    <div>
                        <span>1998</span>
                        <span>Icon</span>
                    </div>
                    <div>
                        <p>ay kalam</p>
                    </div>
                </div>
           </section>
        </div>
        );
};

export { HomePage };