import React, { useContext } from 'react'
import ProductsContext from '../../context/products/productsContext'
import ProductItem from './ProductItem'

const Products = () => {
  //   const productsContext = useContext(ProductsContext)

  //   const products = productsContext

  const products = [
    {
      "name": "singing coach unlimited",
      "number": "b0006se5bq",
      "description": "singing coach unlimited - electronic learning products (win me nt 2000 xp)",
      "images": [
        {
          "url": "http://lorempixel.com/200/200/technics/",
          "name": "singing coach"
        },
        {
          "url": "http://lorempixel.com/200/200/abstract/",
          "name": "front side"
        }
      ]
    },
    {
      "name": "adobe after effects professional 6.5 upgrade from standard to professional",
      "number": "b00021xhzw",
      "description": "upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets",
      "images": []
    },
    {
      "name": "domino designer/developer v5.0",
      "number": "b00021xhzw",
      "description": "reference domino designer/developer r5 doc pack includes the following titles: application development with domino designer (intermediate-advanced) 536 pages it explains building applications creating databases using forms fields views folders navi",
      "images": [
        {
          "url": "http://lorempixel.com/200/200/people/",
          "name": "cover"
        }
      ]
    }
  ]

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
