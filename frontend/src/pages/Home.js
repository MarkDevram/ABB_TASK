// // Home.js
// import React, { useEffect, useState } from "react"
// import "./Home.css"

// const products = [
//   {
//     id: 1,
//     name: "Sony Black Headphones",
//     minBid: 100,
//     currentBid: 157,
//     endsIn: "1 day 12 hrs 43 minutes",
//     image: "https://via.placeholder.com/150/000000/FFFFFF?text=Sony+Headphones",
//   },
//   {
//     id: 2,
//     name: "Apple AirPod 2nd Gen",
//     minBid: 80,
//     currentBid: 95,
//     endsIn: "1 day 12 hrs 43 minutes",
//     image: "https://via.placeholder.com/150/000000/FFFFFF?text=AirPod+2nd+Gen",
//   },
//   {
//     id: 3,
//     name: "Mi 3i 20000mAh Power Bank",
//     minBid: 40,
//     currentBid: 46,
//     endsIn: "1 day 12 hrs 43 minutes",
//     image: "https://via.placeholder.com/150/000000/FFFFFF?text=Power+Bank",
//   },
//   {
//     id: 4,
//     name: "Tribit Bluetooth Speaker",
//     minBid: 10,
//     currentBid: 15,
//     endsIn: "1 day 12 hrs 43 minutes",
//     image:
//       "https://via.placeholder.com/150/000000/FFFFFF?text=Bluetooth+Speaker",
//   },
//   {
//     id: 5,
//     name: "WiFi Security Camera",
//     minBid: 100,
//     currentBid: 157,
//     endsIn: "1 day 12 hrs 43 minutes",
//     image: "https://via.placeholder.com/150/000000/FFFFFF?text=Security+Camera",
//   },
// ]

// const Home = () => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"))
//     if (userData) {
//       setUser(userData)
//     }
//   }, [])

//   return (
//     <div className="home-container">
//       <h1>
//         Welcome,{" "}
//         <span className="highlight">{user ? user.username : "Guest"}!</span>
//       </h1>
//       <p>Explore the latest auctions and bid for amazing products!</p>
//       <div className="products-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>
//               Minimum Bid: <strong>${product.minBid}</strong>
//             </p>
//             <p>
//               Current Bid: <strong>${product.currentBid}</strong>
//             </p>
//             <p>Ends in: {product.endsIn}</p>
//             <button className="bid-button">Bid now &gt;</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home

// Home.js
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css" // Ensure CSS is imported

const Home = () => {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
    }

    // Mock data for products, replace with actual API if needed
    const mockProducts = [
      {
        id: 1,
        name: "Sony Black Headphones",
        price: 100,
        bid: 157,
        description: "High-quality sound",
      },
      {
        id: 2,
        name: "Apple AirPod 2nd Gen",
        price: 80,
        bid: 95,
        description: "Wireless convenience",
      },
      {
        id: 3,
        name: "Mi 3i 20000mAh Power Bank",
        price: 40,
        bid: 46,
        description: "Long battery life",
      },
      {
        id: 4,
        name: "Tribit Bluetooth Speaker",
        price: 10,
        bid: 15,
        description: "Portable sound",
      },
    ]

    setProducts(mockProducts)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } })
  }

  return (
    <div className="home-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h1>
        Welcome, <span className="highlight">{user?.username}!</span>
      </h1>
      <p>Explore the latest auctions and bid for amazing products!</p>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.name}</h2>
            <p>
              Minimum Bid: <strong>${product.price}</strong>
            </p>
            <p>
              Current Bid: <strong>${product.bid}</strong>
            </p>
            <button className="bid-button">Bid now ></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
