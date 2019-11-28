import React, { useReducer } from 'react'
import ProductsContext from './productsContext'
import ProductsReducer from './productsReducer'

const ProductsProvider = props => {
  const initialState = {
    products: [],
    product: {}
  }

  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        dispatch
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
