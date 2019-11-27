import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = ({ match }) => {
  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    const fetchProduct = await fetch(`http://localhost:3000/products?number=${match.params.number}`)

    const product = await fetchProduct.json()

    console.log(product);

    setProduct(product)
  }

  return <Fragment>
    <Link to='/' className="btn btn-light">Back To List</Link>
    <div className="card">
      <div className="all-center">
        <h1>{}</h1>
      </div>
    </div>
  </Fragment>
}

export default ProductDetails
