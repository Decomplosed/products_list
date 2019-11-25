import React from 'react'
import { Link } from 'react-router-dom'


const ProductItem = ({ product: { name, number } }) => {
  return (
    <li className="card">
      <Link
        to={`/product/${number}`}
      >
        {name}
      </Link>
    </li>
  )
}

export default ProductItem
