const express = require("express")
const router = express.Router()
const { AuctionItem } = require("../models/auctionItem")

router.get("/", async (req, res) => {
  const auctions = await AuctionItem.findAll()
  res.json(auctions)
})

router.get("/:id", async (req, res) => {
  const auction = await AuctionItem.findByPk(req.params.id)
  if (auction) {
    res.json(auction)
  } else {
    res.status(404).json({ error: "Auction not found" })
  }
})

module.exports = router
