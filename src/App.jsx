import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Headsets from './pages/Headsets.jsx';
import { headsets } from './data.js';
import Headsetinfo from './pages/Headsetinfo.jsx';
import Cart from './pages/Cart.jsx';
import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(headset) {
    setCart(...cart, headset)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  // const dupeItem = cart.find(item => +item.id === +headset.id)
  // if  (dupeItem){
  //   setCart(cart.map(item => {
  //     if (item.id === dupeItem.id){
  //       return{
  //         ...item,
  //         quantity: item.quantity + 1
  //       }
  //     }
  //     else{
  //       return item
  //     }
  //   }))
  // }
  // else{
  //   setCart([...cart, {...headset, quantity: 1}])
  // }
  // useEffect(() => {

  // },[cart])
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/headsets" exact render={() => <Headsets headsets={headsets} />} />
        <Route path="/headsets/:id" render={() => <Headsetinfo headsets={headsets} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart headsets={headsets} />} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
