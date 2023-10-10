import React, { createContext, useCallback, useContext, useState } from "react";

export interface ICartContext {
  cart: ICartProduct[] | null;
  addToCart: (id: number) => void;
  removeUnitFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  isOpen: boolean;
  setCartOpen: (value: boolean) => void;
}

interface ICartProduct {
  id: number;
  quantity: number;
}

interface Props {
  children: React.ReactNode;
}

const CartContext = createContext<ICartContext>({
  isOpen: false,
  cart: null,
  addToCart: () => {},
  removeFromCart: () => {},
  removeUnitFromCart: () => {},
  setCartOpen: () => {},
});

export const useCartContex = () => useContext(CartContext);

const CartProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const addToCart = useCallback(
    (id: number) => {
      const idx = cart.findIndex((i) => i.id === id);
      if (idx === -1) {
        setCart([...cart, { id, quantity: 1 }]);
        setIsOpen(true);
        return;
      }
      setCart((prev) => {
        setIsOpen(true);
        return [
          ...prev.splice(idx, 1, { id, quantity: prev[idx].quantity + 1 }),
        ];
      });
    },
    [cart],
  );

  const removeUnitFromCart = useCallback(
    (id: number) => {
      const idx = cart.findIndex((i) => i.id === id);
      if (idx === -1) return;
      if (cart[idx].quantity === 1) {
        setCart((prev) => prev.filter((i) => i.id !== id));
        return;
      }
      setCart((prev) => {
        return [
          ...prev.splice(idx, 1, { id, quantity: prev[idx].quantity - 1 }),
        ];
      });
    },
    [cart],
  );

  const setCartOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setCartOpen,
        cart,
        addToCart,
        removeUnitFromCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
