import React from "react"
import "./App.css"
import Products from "../Products"
import Total from "../Total"
import { CartProvider } from "../../context"

const App = () => {
  return (
    <div className="my-5">
      <CartProvider>
        <Products />
        <Total />
      </CartProvider>
    </div>
  )
}

export { App }
