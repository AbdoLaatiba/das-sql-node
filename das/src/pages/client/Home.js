import "../../App.css";
import Navbar from "./nav-bar";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import Content from "./content";
import Doctorregister from "../doctor/doctor-register";
import Doctorcard from "../../components/doctor-card";
import Signin from "./sign-in";
import Patientregister from "../patient/patient-register";
import Profile from "../doctor/profile";

function Home() {
  let { path, url } = useRouteMatch();
  return (
    <div className="App">
      <Navbar />
      <Route exact path={path} component={Content} />
      <Route path={`${path}doc/register`}>
        <Doctorregister />
      </Route>
      <Route path={`${path}signin`}>
        <Signin />
      </Route>
      <Route path={`${path}patient/register`}>
        <Patientregister />
      </Route>
      <Route path={`${path}doc/profile`}>
        <Profile />
      </Route>
    </div>
  );
}

export default Home;
