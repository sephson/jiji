import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Registration from "./pages/Regis-Login/Registration";
import LoginModal from "./pages/Regis-Login/Login";
import Sell from "./pages/Sell/Sell";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={LoginModal} />
          <Route path="/post-ad" component={Sell} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
