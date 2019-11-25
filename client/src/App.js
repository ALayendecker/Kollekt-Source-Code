import React from "react";
// import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyCollections from "./pages/MyCollections";
import CollectionDetails from "./pages/CollectionDetails";
import PublicCollection from "./pages/PublicCollection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Alert from "./components/layout/alert"
// import PrivateRoute from "./components/PrivateRoute"
//Redux below
import {Provider} from "react-redux";
import store from "./store";



// dude uses const App = () =>   (video32)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        {/* alert can not be in the switch but must be in the container */}
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />;
          <Route exact path="/PublicCollection" component={PublicCollection} />;
          <Route exact path="/Login" component={Login} />;
          <Route exact path="/Signup" component={SignUp} />;
          <Route exact path="/Dashboard" component={Dashboard} />;
          {/* Private Route is set but waiting on Redux for it to compile */}
          {/* <PrivateRoute exact path="/Dashboard" component={Dashboard} />; */}
          <Route exact path="/MyCollections" component={MyCollections} />;
          <Route
            exact
            path="/CollectionDetails"
            component={CollectionDetails}
          />
          ;
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}
export default App;
