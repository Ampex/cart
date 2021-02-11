import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context"
// import { useProductCheck } from "api"

const Product = ({ pid, name, price, quantity, isBlocked, min, max }) => {
  const [products, setProducts] = useContext(CartContext)

  const handleIncrease = () => {
    setProducts(
      [...products],
      products[products.findIndex((item) => item.pid === pid)].quantity++
    )
  }
  const handleDecrease = () => {
    setProducts(
      [...products],
      products[products.findIndex((item) => item.pid === pid)].quantity--
    )
  }

  return (
    <li className="row py-3 shadow-sm bg-white rounded d-flex align-items-center">
      <div className="col-sm-6 pl-0">
        <h5 className="col-12">{name}</h5>
        <span className="col-auto">Cena: {price} zł</span>
      </div>
      <span className="col py-2 text-muted">
        Obecnie masz {quantity} sztuk produktu
      </span>
      <div className="col-md-3">
        <Button
          onClick={handleDecrease}
          className="m-md-2 mr-2"
          disabled={isBlocked || quantity === min}
        >
          -
        </Button>
        <Button
          onClick={handleIncrease}
          className=""
          disabled={isBlocked || quantity === max}
        >
          +
        </Button>
      </div>
    </li>
  )
}

export default Product
