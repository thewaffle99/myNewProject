import React, { useState } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./components/Detail";
// import PersonForm from "./components/PersonForm";
// import PersonList from "./components/PersonList";
const App = () => {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/api/people/:id" />
      </Router>
    </div>
  );
};
export default App;
