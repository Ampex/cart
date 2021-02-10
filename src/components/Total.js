import React, { useContext } from "react"
import { CartContext } from "../context"

const Total = () => {
  const [products] = useContext(CartContext)
  const total = products
    .reduce((total, product) => total + product.sum * product.quantity, 0)
    .toFixed(2)

  const count = products.reduce((total, product) => total + product.quantity, 0)

  return (
    <div className="container py-3 border">
      <div className="text-right mt-2">
        <span>Ilość przedmiotów w koszyku</span>
        <h2>{count}</h2>
        <span>Suma</span>
        <h2>{total} zł</h2>
      </div>
    </div>
  )
}

export default Total
