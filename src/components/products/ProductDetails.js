import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const fetchProduct = async productNumber => {
  const fetchProduct = await fetch(`http://localhost:3000/products?number=${productNumber}`)

  const [product] = await fetchProduct.json()
  return product
}

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetchProduct(match.params.number).then(setProduct)
  }, [setProduct, match.params.number])

  if (!product) return null

  return (
    <div>
      <Link to='/' className='btn btn-light'>Back To List</Link>
      <Link to={`/product/${product.number}/edit`} className='btn btn-dark'>Edit</Link>
      <div className='card'>
        <div>
          <strong>Number:</strong>
          <p>{product.number}</p>
          <br />
          <strong>Name:</strong>
          <p>{product.name}</p>
          <br />
          <strong>Description:</strong>
          <p>{product.description}</p>
        </div>
      </div>
      <div className='card'>
        <div>
          <strong>Photos ({product.images.length}):</strong>
          <br />
          {product.images.map(image => (
            <img
              key={image.name}
              src={image.url}
              alt={image.name}
              className='product-img'
            />
          ))}
        </div>
      </div>
    </div >
  )
}

export default ProductDetails
