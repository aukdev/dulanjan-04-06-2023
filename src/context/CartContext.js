import { createContext, useState } from "react";

export const CartContextAPI = createContext({});

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(1);

  return (
    <CartContextAPI.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContextAPI.Provider>
  );
};

export default CartContext;
