import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Card({ name, title, id }) {
  return (
    <>
      <div className="card">
        <img src={`https://robohash.org/${id}`} className="card-img-top " />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
