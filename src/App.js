import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/home/Home";
import StoreContextProvider from "./context/StoreContext";

import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login/Login";
import Cart from "./components/pages/Cart/Cart"
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";


function App() {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setshowLogin={setshowLogin} /> : <></>}
      <Router>
        <StoreContextProvider>
         
          <Navbar setshowLogin={setshowLogin} />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order" element={<PlaceOrder />} />

          </Routes>
          
          
          <Footer />
        </StoreContextProvider>
      </Router>
    </>
  );
}

export default App;
