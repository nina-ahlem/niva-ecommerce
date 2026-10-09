import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import CartTotal, { FREE_SHIPPING_FROM } from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartAmount,
    getCartCount,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  // Flatten { productId: { size: qty } } into a list of rows
  const cartData = [];
  for (const id in cartItems) {
    for (const size in cartItems[id]) {
      if (cartItems[id][size] > 0) {
        cartData.push({ _id: id, size, quantity: cartItems[id][size] });
      }
    }
  }

  const count = getCartCount();
  const subtotal = getCartAmount();
  const remaining = FREE_SHIPPING_FROM - subtotal;

  if (cartData.length === 0) {
    return (
      <div className="border-t border-gray-300 pt-14 text-center">
        <h1 className="text-2xl font-medium">Your cart is empty</h1>
        <button
          onClick={() => navigate("/collection")}
          className="mt-6 bg-black text-white rounded-full px-8 py-3 text-sm"
        >
          Continue shopping
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-300 pt-10">
      <h1 className="text-3xl font-medium mb-6">
        My cart ({count} {count === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        {/* LEFT: banner + items */}
        <div>
          {remaining > 0 && (
            <div className="bg-gray-100 rounded-md p-4 mb-6 text-sm">
              <p className="font-semibold">Almost there!</p>
              <p className="text-gray-700">
                Free delivery on orders over {FREE_SHIPPING_FROM} {currency}.
                You're {remaining.toFixed(2)} {currency} away.
              </p>
            </div>
          )}

          {cartData.map((item) => {
            const productData = products.find((p) => p._id === item._id);
            if (!productData) return null;

            return (
              <div
                key={`${item._id}-${item.size}`}
                className="flex gap-4 py-5 border-t border-gray-200"
              >
                <div className="bg-gray-100 rounded-lg p-2 shrink-0">
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-20 sm:w-28 rounded"
                  />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {productData.name}
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {productData.price} {currency}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Size: {item.size}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value),
                        )
                      }
                      className="border-2 border-black rounded-md px-3 py-2 w-24 bg-white cursor-pointer"
                    >
                      {Array.from(
                        { length: Math.max(10, item.quantity) },
                        (_, i) => i + 1,
                      ).map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      aria-label="Remove item"
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M5 5l14 14M19 5L5 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: summary card */}
        <aside className="lg:sticky lg:top-24">
          <CartTotal>
            <button
              onClick={() => navigate("/place-order")}
              className="mt-6 w-full bg-black text-white rounded-full py-4 font-semibold hover:bg-gray-800 active:bg-gray-700"
            >
              Place Order
            </button>

            <p className="mt-5 text-sm text-gray-600">
              Cash on delivery available
            </p>
          </CartTotal>
        </aside>
      </div>
    </div>
  );
};

export default Cart;