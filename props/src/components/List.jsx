import React from "react";
import { Card } from "./Card";
import { database } from "./database";

export function List() {
  return (
    <div className="robot">
      {database.map((element) => {
        return (
          <Card id={element.id} name={element.name} title={element.title} />
        );
      })}
    </div>
  );
}
