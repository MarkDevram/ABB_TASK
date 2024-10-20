import { useEffect, useState } from "react"
import api from "../api/axios"

function Auctions() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await api.get("/auctions")
        setAuctions(response.data)
      } catch (error) {
        console.error("Error fetching auctions:", error)
        alert("Failed to fetch auctions")
      }
    }
    fetchAuctions()
  }, [])

  return (
    <div>
      <h1>Auctions</h1>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.id}>
            <h3>{auction.title}</h3>
            <p>{auction.description}</p>
            <p>Starting Bid: ${auction.startingBid}</p>
            <p>Ends: {new Date(auction.endDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Auctions
