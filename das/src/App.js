import "./App.css";
// import Navbar from "./pages/nav-bar";

// import Header from "./pages/header";
// import Doctors from "./pages/doctors";
// import DisplayResults from "./pages/client/displayResults";
// import Footer from "./pages/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/client/Home";
// import Home from "./pages/client/Home";
// import Doctorregister from "./pages/doctor-register";
// import Patientregister from "./pages/patient-register";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/doctor/dashboard";
import Patient from "./pages/patient/patient";
// import Adddoc from "./pages/admin/add-doc";
// import Addspecialty from "./pages/admin/add-specialty";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/admin" component={Admin} />
          <Route path="/doctor" component={Dashboard} />
          <Route path="/patient" component={Patient} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
