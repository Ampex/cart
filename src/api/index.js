import axios from "axios"

const services = {
  productList: "/api/cart",
  productCheck: "/api/product/check",
}

export const getProductList = async () => {
  try {
    const payload = await axios.get(services.productList)
    return payload.data
  } catch (reason) {
    throw reason
  }
}

export const useProductCheck = async (pid, quantity) => {
  try {
    const payload = await axios.post(services.productCheck, { pid, quantity })
    return payload.data
  } catch (reason) {
    throw reason
  }
}
