import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
  // useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
// import axios from "axios";
// import View from "react-dom";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    // axios
    //   .get("/api/config")
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
