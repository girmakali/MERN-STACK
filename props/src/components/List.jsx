import React from "react";
import { Card } from "./Card";
import { database } from "./database";

export function List() {
  return (
    <div className="robot">
      <Card
        id={database[0].id}
        name={database[0].name}
        title={database[0].title}
      />
      <Card
        id={database[1].id}
        name={database[1].name}
        title={database[1].title}
      />
      <Card
        id={database[2].id}
        name={database[2].name}
        title={database[2].title}
      />
    </div>
  );
}
