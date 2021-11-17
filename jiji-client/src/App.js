import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Registration from "./pages/Regis-Login/Registration";
import LoginModal from "./pages/Regis-Login/Login";
import Sell from "./pages/Sell/Sell";
import MyAds from "./pages/MyAdverts/myAdverts";
import ItemDetail from "./pages/ItemDetails/ItemDetail";
import People from "./pages/ListOfPeopleInterestedInMyItems/People";
import Track from "./pages/Track/Track";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={LoginModal} />
          <Route path="/post-ad" component={Sell} />
          <Route path="/adverts" component={MyAds} />
          <Route path="/item/:itemId" component={ItemDetail} />
          <Route path="/interests/:itemId" component={People} />
          <Route path="/shown-interests" component={Track} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
