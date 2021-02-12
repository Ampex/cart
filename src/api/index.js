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

export const useQuantityIfAvaiable = debounce(async (pid, quantity, setMin) => {
  await axios.post(services.productCheck, { pid, quantity }).catch(() => {
    return setMin()
  })
}, 1000)
