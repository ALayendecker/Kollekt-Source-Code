import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />;
          <Route component={NoMatch} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
