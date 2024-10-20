const express = require("express")
const Bid = require("../models/bid")
const AuctionItem = require("../models/auctionItem")
const router = express.Router()

// Place a Bid
router.post("/", async (req, res) => {
  try {
    const { amount, UserId, AuctionItemId } = req.body

    // Validate required fields
    if (!amount || !UserId || !AuctionItemId) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    // Check if the auction item exists
    const auctionItem = await AuctionItem.findByPk(AuctionItemId)
    if (!auctionItem) {
      return res.status(404).json({ error: "Auction item not found" })
    }

    // Create the bid
    const newBid = await Bid.create({ amount, UserId, AuctionItemId })
    res.status(201).json({ message: "Bid placed successfully", bid: newBid })
  } catch (error) {
    console.error("Error placing bid:", error)
    res.status(500).json({ error: "Error placing bid", details: error.message })
  }
})

module.exports = router
