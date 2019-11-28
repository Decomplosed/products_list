import React, { useEffect, useState } from 'react'

const fetchProduct = async productNumber => {
  const fetchProduct = await fetch(`http://localhost:3000/products?number=${productNumber}`)

  const [product] = await fetchProduct.json()
  return product
}

export const ProductEdit = ({ match }) => {

  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetchProduct(match.params.number).then(setProduct)
  }, [setProduct, match.params.number])

  if (!product) return null

  return (
    <div>
      <div className='card'>
        <div className='form-container'>
          <h2>Edit Product</h2>
          <label>Name:</label>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={product.name}
          />
          <label>Description:</label>
          <textarea
            type='text'
            placeholder='description'
            name='description'
            value={product.description}
          />
          <button className='btn btn-primary'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ProductEdit
