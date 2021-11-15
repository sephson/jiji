import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Registration from "./pages/Regis-Login/Registration";
import LoginModal from "./pages/Regis-Login/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={LoginModal} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
