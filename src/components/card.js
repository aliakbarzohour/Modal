import faker from "faker";
import React from "react";
import '../App.css'

const Card = (props) => {
  return (
    <>
        <div className="card">
          <div classNameName="blurring dimmable image">
            <img src={faker.image.people()} />
          </div>
          <div className="content">
            <a className="header">{props.user}</a>
            <div className="meta">
              <span className="date">Created in {props.nowtime}</span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="users icon"></i>2 Members
            </a>
          </div>
        </div>
      
    </>
  );
};

export default Card;
