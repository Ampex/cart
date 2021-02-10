import React, { useState, createContext } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  return (
    <CartContext.Provider value={[products, setProducts]}>
      {children}
    </CartContext.Provider>
  )
}
