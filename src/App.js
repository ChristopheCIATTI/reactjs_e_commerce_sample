import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Header from './components/header/header';
import Frameset from './pages/frameset';
import Wheelset from './pages/wheelset';
import Groupset from './pages/groupset';
import FramesetProduct from './pages/products/framesetProduct';
import WheelsetProduct from './pages/products/wheelsetProduct';
import GroupsetProduct from './pages/products/groupsetProduct';
import About from './pages/about';
import Cart from './pages/cart';
import DeliveryCoords from './pages/deliveryCoords';
import Footer from './pages/footer';

export const CartNumberOfItem = React.createContext({
  "cartNotify": 0,
  setCartNotify: () => {}
})

function App() {

  const [cartNumberItem, setCartNumberItem] = useState(0)
  const value = { cartNumberItem, setCartNumberItem };

  return (
    <>
    <CartNumberOfItem.Provider value ={value}>
      <Router>
          <Header />
          <Switch>
            <Route path="/frameset/:id" component={FramesetProduct} />
            <Route path="/frameset" component={Frameset} />
            <Route path="/wheelset/:id" component={WheelsetProduct} />
            <Route path="/wheelset" component={Wheelset} />
            <Route path="/groupset/:id" component={GroupsetProduct} />
            <Route path="/groupset" component={Groupset} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/deliveryCoords" component={DeliveryCoords} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
      </Router>
      </CartNumberOfItem.Provider>
    </>
  );
}

export default App;
