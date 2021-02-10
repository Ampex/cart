import React, { useState } from "react"
import { Button } from "react-bootstrap"

const Product = ({ name, price }) => {
  const [count, setCount] = useState(1)
  return (
    <li className="row py-3 border-bottom">
      <div className="col pl-0">
        <h5 className="col-12">{name}</h5>
        <span className="col-auto">Cena: {price} zł</span>
      </div>
      <Button disabled={false}>-</Button>
      <span>{count}</span>
      <Button disabled={false}>+</Button>
    </li>
  )
}

export default Product
