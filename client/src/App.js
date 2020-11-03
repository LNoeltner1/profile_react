import React, { useEffect } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";
// import Router from "express";
// import View from "react-dom";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
