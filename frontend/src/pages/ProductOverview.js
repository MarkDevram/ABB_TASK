// ProductOverview.js
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./ProductOverview.css"

const ProductOverview = () => {
  const location = useLocation()
  const product = location.state?.product
  const navigate = useNavigate()

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className="product-overview-container">
      <button className="back-button" onClick={() => navigate("/home")}>
        Back to Products
      </button>
      <h1>{product.name}</h1>
      <p>
        <strong>Current Bid:</strong> ${product.bid}
      </p>
      <p>
        <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus...
      </p>
      <button className="bid-now-button">Place Bid</button>
    </div>
  )
}

export default ProductOverview
