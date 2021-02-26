import React from "react";
import "./Card.css";

function Card({ data, index }) {
  return (
    <div className="card" index={index}>
      <img
        src="https://c.ndtvimg.com/2020-01/hqocblio_restaurant-_625x300_14_January_20.jpg"
        alt=""
      />
      <div className="card__info">
        <h2>{data.name}</h2>
        <br></br>
        <h5>Opening day & time -</h5>
        {data.time.split("/").map((time) => (
          <h4>{time}</h4>
        ))}
      </div>
    </div>
  );
}

export default Card;
