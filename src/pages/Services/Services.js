import React  from "react";
import './Services.css'
const Services= () => {
  
        return (
        <div className="container">
            <h2>
                Our Services
            </h2>

            
        <div id="cardsContainer">
            <div className="cardServ">
                <div className="content">
                    <h3 className="title">Solar Energy</h3>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                    <button className="btn">Read more</button>
                </div>
            </div>
            <div className="cardServ">
                <div className="content">
                    <h3 className="title">Solar Energy</h3>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                    <button className="btn">Read more</button>
                </div>
            </div>
            <div className="cardServ">
                <div className="content">
                    <h3 className="title">Solar Energy</h3>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                    <button className="btn">Read more</button>
                </div>
            </div>
        </div>
     </div>
        );
};

export {Services};