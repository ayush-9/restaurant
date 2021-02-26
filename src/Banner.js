import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <div className="banner__info2">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
            alt=""
          ></img>
          &nbsp;
          <h1>React App</h1>
        </div>
        <br></br>
        <h3>For Restaurants</h3>
        <h5>Use the above search box to filter your favourite place..</h5>
      </div>
    </div>
  );
}

export default Banner;
