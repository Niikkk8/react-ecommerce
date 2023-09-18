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
    setCart([...cart, { ...headset, quantity: 1 }])
  }

  function changeQuantity(headset, quantity) {
    setCart(cart.map(
      item => item.id === headset.id? 
      {
        ...item,
        quantity: +quantity,
      } :
      item
    ))
  }

  function removeItem(item){
    setCart(cart.filter(headset => headset.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity; 
    });
    return counter;
  }
  
  useEffect(() => {
    
  }, [cart])


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/headsets" exact render={() => <Headsets headsets={headsets} />} />
        <Route path="/headsets/:id" render={() => <Headsetinfo headsets={headsets} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() => <Cart headsets={headsets} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;

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