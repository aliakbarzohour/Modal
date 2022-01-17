import faker from "faker";
import React from "react";
import "./App.css";

const Card = (props) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={faker.image.fashion()} />
        </div>
        <div className="content">
          <a href={props.url} className="header">{props.name}</a>
          <div className="meta">
            <span className="date">Joined in {faker.date.month()}</span>
          </div>
          <div className="description">
            {faker.random.words(3)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
