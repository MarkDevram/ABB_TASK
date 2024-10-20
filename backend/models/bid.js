const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const User = require("./user")
const AuctionItem = require("./auctionItem")

const Bid = sequelize.define("Bid", {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})

// Ensure proper relationships between models
Bid.belongsTo(User, { foreignKey: "UserId", allowNull: false })
Bid.belongsTo(AuctionItem, { foreignKey: "AuctionItemId", allowNull: false })

User.hasMany(Bid, { foreignKey: "UserId" })
AuctionItem.hasMany(Bid, { foreignKey: "AuctionItemId" })

module.exports = Bid
