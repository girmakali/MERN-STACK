import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";

export function Card({ name, title, id }) {
  let [number, setNummber] = useState(0);
  const ChangeOfTitle = () => {
    setNummber((number = number + 1));
  };

  return (
    <>
      <div style={{ backgroundColor: "grey", color: "white" }} className="card">
        <img src={`https://robohash.org/${id}`} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <button onClick={ChangeOfTitle} className="btn btn-primary">
            {number} Like
          </button>
        </div>
      </div>
    </>
  );
}
