import React, { useContext, useEffect, useState } from 'react'
import ProductsContext from '../../context/products/productsContext'
import ProductItem from './ProductItem'


const Products = () => {

  // const productsContext = useContext(ProductsContext)

  // const { products } = productsContext

  useEffect(() => {
    fetchProducts()
  }, [])

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await fetch('http://localhost:3000/products')

    const products = await data.json()

    setProducts(products)
  }

  return (
    <ul style={productStyle}>
      {products.map(product => (
        <ProductItem
          key={product.number}
          product={product}
        />
      ))}
    </ul>
  )
}

const productStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)'
}

export default Products
