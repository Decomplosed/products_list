import {
  GET_PRODUCTS,
  GET_PRODUCT_ITEM,
  UPDATE_PRODUCT_ITEM
} from '../types'

export default (state, action) => {
  console.log('productsReducer', action)
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCT_ITEM:
      return {
        ...state,
        product: action.payload
      }
    case UPDATE_PRODUCT_ITEM: {
      return {

      }
    }
    default:
      return state
  }
}
