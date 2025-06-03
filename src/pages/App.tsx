import React from "react";

import "../assets/scss/App.scss";
import TableSearch from "../components/tableSearch";

const App = () => {
  return (
    <div className="App vh-100">
      <h1 className="mt-100">GitHub repositories explorer</h1>
      <TableSearch />
    </div>
  );
};

export default App;
