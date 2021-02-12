import React from "react"
import "./App.css"
import ProductList from "../ProductList"
import Total from "../Total"
import { CartProvider } from "context"

const App = () => {
  return (
    <div className="my-5">
      <CartProvider>
        <ProductList />
        <Total />
      </CartProvider>
    </div>
  )
}

export { App }
