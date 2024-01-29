import React from "react";
import { Card } from "./Card";
import { database } from "./database";
import "./List.css";

export function List() {
  return (
    <div className="robot">
      {database.map((list) => {
        return <Card name={list.name} title={list.title} id={list.id} />;
      })}
    </div>
  );
}
