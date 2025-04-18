import React, { useContext } from "react";
import { CartContext } from "../Providers/Context";

const Cart = () => {
  const { addCart } = useContext(CartContext);
  return (
    <div>
      {addCart.map((cart) => (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
          <img className="h-24 w-24 object-contain" src={cart.image} alt="" />
          <h2 className="text-2xl font-semibold ">{cart.name}</h2>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Cart;
