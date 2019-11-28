import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Products from '../products/Products'
import productsContext from '../../context/products/productsContext'
import { GET_PRODUCTS } from '../../context/types'

const getProducts = async () => {
  const res = await axios.get('http://localhost:3000/products')

  return res.data
}

const ProductsList = () => {
  const { dispatch } = useContext(productsContext)

  useEffect(() => {
    getProducts().then(products => {
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    })
  }, [dispatch])

  return (
    <Products />
  )
}

export default ProductsList
