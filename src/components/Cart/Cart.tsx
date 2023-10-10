import { useRef } from "react";
import { useCartContex } from "../../hooks/CartProvider";
import { IconCart } from "../Icons";
import CartItem from "./CartItem";

const Cart = () => {
  const popOverRef = useRef<HTMLDivElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, setCartOpen, cart } = useCartContex();
  const totalQty = cart?.reduce((total, curr) => (total += curr.quantity), 0);

  return (
    <>
      <button
        ref={cartButtonRef}
        onClick={() => setCartOpen(!isOpen)}
        className="relative"
      >
        <IconCart
          fill={isOpen ? "fill-darkBlue" : "fill-[#69707D]"}
          hoverFill="hover:fill-darkBlue"
        />
        {totalQty ? (
          <span className="absolute bottom-3 rounded-full bg-mainOrange px-2 text-xs text-white">
            {totalQty}
          </span>
        ) : null}
      </button>
      {/* -left-[17.5rem] -right-[3.3rem] top-16 */}
      <div
        ref={popOverRef}
        className={`absolute left-2 right-4 top-20 z-10 mx-auto h-64 overflow-hidden rounded-xl bg-white shadow-xl md:left-[60%] md:top-20 xl:left-[70%] xl:right-3 2xl:-right-[1%]  ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform`}
      >
        <div className="flex h-full flex-col">
          <h3 className="w-full border-b border-gray-200 p-5 font-bold">
            Cart
          </h3>
          {totalQty === 0 ? (
            <p className=" my-auto text-center font-bold text-gray-500">
              Your cart is empty
            </p>
          ) : (
            <div className="overflow-auto p-4">
              {cart?.map((item) => (
                <CartItem key={item.id} id={item.id} quantity={item.quantity} />
              ))}
              <button className="mt-4 w-full rounded-lg bg-mainOrange p-3 text-white hover:bg-orange-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
