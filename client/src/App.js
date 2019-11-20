import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyCollections from "./pages/MyCollections";
import PublicCollection from "./pages/PublicCollection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />;
          <Route exact path="/PublicCollection" component={PublicCollection} />;
          <Route exact path="/Login" component={Login} />;
          <Route exact path="/Dashboard" component={Dashboard} />;
          <Route exact path="/MyCollections" component={MyCollections} />;
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
