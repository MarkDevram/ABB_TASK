const express = require("express")
const cors = require("cors")
const sequelize = require("./config/database")
const userRoutes = require("./routes/userRoutes")
const auctionRoutes = require("./routes/auctionRoutes") // Import auction routes

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Register Routes
app.use("/api/users", userRoutes)
app.use("/api/auctions", auctionRoutes) // Register auction routes

// Sync Models with Database
sequelize
  .sync({ force: false }) // Set `force: true` to drop and recreate tables (optional)
  .then(() => console.log("Database synced..."))
  .catch((err) => console.error("Error syncing database:", err))

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
