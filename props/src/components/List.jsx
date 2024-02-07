import React from "react";
import { Card } from "./Card";
import { database } from "./database";
import "./List.css";

export function List({ data }) {
  return (
    <div className="robot">
      {data.map((list) => {
        return <Card name={list.name} title={list.title} id={list.id} />;
      })}
    </div>
  );
}
