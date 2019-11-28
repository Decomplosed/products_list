import React, { useContext } from 'react'
import ProductsContext from '../../context/products/productsContext'
import ProductItem from './ProductItem'

const Products = () => {
  const productsContext = useContext(ProductsContext)

  const { products } = productsContext

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
