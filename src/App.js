import React from "react";

// the pages
import Home from "./components2/App";
import Login from "./componentLogin/unitSign";
import Sign from "./componentSignUp/unitSign";
import ProfilDashboard from "./dashboard/App";
import InfoVilles from "./components2/villes/InfoVilles"
import firebase from "./firebaseConfig";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Serviceoffice from "./components2/service/InfoServices";
import Footer from "./footer/Footer";
import { isAuthenticated } from "./Auth/Auth";



export default function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <Router>

      <Switch>
        <Route path='/signup' component={Sign} />
        <Route path='/login' component={Login} />
        <Route path='/serviceoffice' component={Serviceoffice} />
        <Route path='/infovilles' component={InfoVilles} />
        <PrivateRoute path="/profil-dashboard" component={ProfilDashboard} />
        <div>
          <Route  exact path='/' component={Home}/>
          <Footer/>
        </div>

    </Switch>
   
 </Router>
  );
}
