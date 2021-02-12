import React, { useState, useEffect, useContext } from "react"
import { getProductList } from "api"
import { CartContext } from "../context"
import Product from "./Product"

const ProductList = () => {
  const [products, setProducts] = useContext(CartContext)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const products = await getProductList()
    const updatedList = products.map((item) => ({
      ...item,
      quantity: 1,
    }))
    setProducts(updatedList)
  }

  const productList = products.map((product) => (
    <Product key={product.pid} {...product} />
  ))

  return (
    <div className="container py-3">
      <h3 className="py-4">Lista produktów</h3>
      {products.length ? (
        <ul className="px-3">{productList}</ul>
      ) : (
        "Wczytywanie..."
      )}
    </div>
  )
}

export default ProductList
