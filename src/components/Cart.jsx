import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen bg-[#264653] mt-3 border-[5px] border-black font-extrabold text-white">
      <div className="w-[40rem] m-auto flex flex-col items-center">
        Cart
        <button
          className="p-2 bg-black text-white w-[12rem] mt-7"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && (
          <h1> Cart is empty add items to the cart</h1>
        )}
        <ItemLists items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
