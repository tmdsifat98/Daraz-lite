import React, { useEffect, useState } from "react";
import { CartContext } from "./Context";
import { getCart } from "../Utilities/utils";

const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);
  useEffect(() => {
    const carts = getCart();
    setAddCart(carts);
  }, []);
  return (
    <CartContext.Provider value={{ addCart, setAddCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
