import React from "react";
import { Card } from "./Card";
import { database } from "./database";
import "./List.css";

export function List() {
  return (
    <div className="robot">
      {database.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            title={element.title}
          />
        );
      })}
    </div>
  );
}
