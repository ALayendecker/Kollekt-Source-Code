import React, { useEffect } from "react";
// import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./components/Profile-Forms/CreateProfile";
import EditProfile from "./components/Profile-Forms/EditProfile";
import MyCollections from "./pages/MyCollections";
import CollectionDetails from "./pages/CollectionDetails";
import PublicCollection from "./pages/PublicCollection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Alert from "./components/layout/alert";
import Profiles from "./components/Profiles/Profiles";
// import Profile from "./components/Profile/index";
import PrivateRoute from "./components/Routing/PrivateRoute";
//Redux below
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// dude uses const App = () =>   (video32)
function App() {
  //empty brakets tell function to only run once similar to compDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* alert can not be in the switch but must be in the container */}
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />;
            <Route path="/PublicCollection/:id" component={PublicCollection} />
            <Route exact path="/Login" component={Login} />;
            <Route exact path="/Signup" component={SignUp} />;
            <Route exact path="/Profiles" component={Profiles} />;
            {/* <Route exact path="/Dashboard" component={Dashboard} />; */}
            {/* Private Route is set but waiting on Redux for it to compile */}
            <Route exact path="/MyCollections" component={MyCollections} />;
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />;
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            ;
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />;
            <PrivateRoute
              exact
              path="/CollectionDetails"
              component={CollectionDetails}
            />
            <Route
              exact
              path="/CollectionDetails/:id"
              component={CollectionDetails}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
