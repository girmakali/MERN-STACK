import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './profile.css'
export const Profile = () => {
  return (
    <div className="container card w-50 m-10">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="Girma Moges">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          like
        </a>
      </div>
    </div>
  );
};
