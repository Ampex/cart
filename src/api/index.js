import axios from "axios"
import { debounce } from "lodash"

const services = {
  productList: "/api/cart",
  productCheck: "/api/product/check",
}

export const getProductList = async () => {
  try {
    const { data } = await axios.get(services.productList)
    return data
  } catch ({ response }) {
    return response.status
  }
}

export const useProductCheck = debounce(async (pid, quantity) => {
  const result = await axios
    .post(services.productCheck, { pid, quantity })
    .then((response) => {
      return response
    })
    .catch(({ response }) => {
      return response.data.isError
    })
  return result
}, 1000)
