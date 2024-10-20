// routes/userRoutes.js
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { User } = require("../models/user")

const router = express.Router()
const SECRET_KEY = "supersecretkey" // For JWT signing

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" })
    }

    // Check if user with the email already exists
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "User registration failed" })
  }
})

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    )

    res.status(200).json({
      message: "Login successful",
      token,
      user: { username: user.username, email: user.email },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Login failed" })
  }
})

// Middleware to authenticate routes using JWT
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) return res.status(401).json({ error: "Unauthorized" })

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" })
    req.userId = decoded.id
    next()
  })
}

// Example Protected Route (requires authentication)
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId)
    if (!user) return res.status(404).json({ error: "User not found" })

    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch profile" })
  }
})

module.exports = router
