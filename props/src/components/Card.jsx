import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { useState } from "react";

export function Card({ name, title, id }) {
  let [like, setlike] = useState(0);

  const increase = () => {
    setlike(1);
  };
  return (
    <>
      <div className="card">
        <img
          src={`https://robohash.org/${id}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <button onClick={increase} className="btn btn-primary">
            {like} like
          </button>
        </div>
      </div>
    </>
  );
}
