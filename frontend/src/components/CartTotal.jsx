import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const FREE_SHIPPING_FROM = 10000; // set your own threshold

// `children` lets a page add extra content inside the card (e.g. a button)
// `className` lets a page add layout classes (e.g. sticky positioning)
const CartTotal = ({ children, className = "" }) => {
  const { delivery_fee, currency, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : delivery_fee;
  const total = subtotal + shipping;

  return (
    <div className={`w-full bg-gray-100 rounded-2xl p-6 ${className}`}>
      <h2 className="text-lg font-semibold mb-4">Order summary</h2>

      <div className="flex flex-col gap-3 text-base">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            {subtotal.toFixed(2)} {currency}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : `${shipping.toFixed(2)} ${currency}`}
          </span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-gray-300">
          <span>Total</span>
          <span>
            {total.toFixed(2)} {currency}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CartTotal;