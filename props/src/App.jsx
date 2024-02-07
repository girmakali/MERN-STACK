import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { List } from "./components/list";
import { database } from "./components/database";
import { Searchbox } from "./components/Searchbox";
import { useState } from "react";

export function App() {
  const [searhcfield, Setsearchfield] = useState("");

  const filteredDatabase = database.filter((user) => {
    return user.name.includes(searhcfield);
  });

  const onSearchChange = (event) => {
    return Setsearchfield(event.target.value);
  };

  return (
    <>
      <Searchbox searchChange={onSearchChange} />
      <List data={filteredDatabase} />
    </>
  );
}
