import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Card({ name, title, id }) {
  return (
    <>
      <div class="card">
        <img src={`https://robohash.org/${id}`} class="card-img-top " />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{title}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
