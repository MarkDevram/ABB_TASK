// App.js
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Navbar from "./pages/Navbar" // Import Navbar
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProductOverview from "./pages/ProductOverview"

function App() {
  const isAuthenticated = localStorage.getItem("user")

  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductOverview />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
