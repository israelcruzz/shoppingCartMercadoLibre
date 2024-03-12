import AppContext from "./appContext";
import { IProviderProps } from "../@types/types";
import { useState } from "react";

export const Provider = ({ children }: IProviderProps) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [cartVisible, setCartVisible] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [prices, setPrices] = useState([])

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartVisible,
    setCartVisible,
    cartItems,
    setCartItems,
    prices,
    setPrices
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
