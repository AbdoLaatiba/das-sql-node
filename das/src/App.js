import "./App.css";
// import Footer from "./pages/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/client/Home";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/doctor/dashboard";
import Patient from "./pages/patient/patient";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/doctor" component={Dashboard} /> */}
          <Route path="/patient" component={Patient} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
