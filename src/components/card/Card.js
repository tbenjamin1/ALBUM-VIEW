import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <section className="card">
        <img className="card-image" alt="album" src={props.url} />
        <h2 className="card-title">{props.title}</h2>
      </section>
    </div>
  );
};
export default Card;
