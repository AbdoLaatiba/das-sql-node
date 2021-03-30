import "../../App.css";
import Navbar from "./nav-bar";

import Header from "./header";
import Doctors from "./doctors";
import DisplayResults from "./displayResults";
import Footer from "./footer";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Content from "./content";
import Doctorregister from "../doctor/doctor-register";
import Doctorcard from "../../components/doctor-card";
import Signin from "./sign-in";
import Patientregister from "../patient/patient-register";

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
    </div>
  );
}

export default Home;
