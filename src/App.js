import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Header from "./component/Header";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("xyz");
  const [age, setAge] = useState(20);
  return (
    <div className="App">
      <CartContext.Provider value={{ name, age,cart,setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
