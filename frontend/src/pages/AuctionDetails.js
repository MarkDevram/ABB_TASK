import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const AuctionDetails = () => {
  const { id } = useParams()
  const [auction, setAuction] = useState(null)

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/auctions/${id}`
      )
      setAuction(response.data)
    }
    fetchAuction()
  }, [id])

  if (!auction) return <p>Loading...</p>

  return (
    <div className="auction-details">
      <h2>{auction.title}</h2>
      <p>{auction.description}</p>
      <p>Current Bid: ${auction.currentBid}</p>
    </div>
  )
}

export default AuctionDetails
