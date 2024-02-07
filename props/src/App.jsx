import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { List } from "./components/list";
import { database } from "./components/database";
import { Searchbox } from "./components/Searchbox";
import { useState } from "react";
import TimerClick from "./components/TimerClick";
import Scrollable from "./components/Scrollable";

export function App() {
  const [searhcfield, Setsearchfield] = useState("");

  const filteredDatabase = database.filter((user) => {
    return user.name.toLowerCase().includes(searhcfield.toLowerCase());
  });

  const onSearchChange = (event) => {
    return Setsearchfield(event.target.value);
  };

  return (
    <>
      <div className="navs">
        <h1>Technology companies in Ethiopia</h1>
        <Searchbox searchChange={onSearchChange} />
        <a>search the company using user name</a>
      </div>
      <Scrollable>
        <List data={filteredDatabase} />
      </Scrollable>
    </>
  );
}
