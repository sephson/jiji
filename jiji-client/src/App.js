import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/post-ad" element={<Sell />} />
          <Route path="/adverts" element={<MyAds />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/interests/:itemId" element={<People />} />
          <Route path="/shown-interests" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
