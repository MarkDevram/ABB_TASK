const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const AuctionItem = sequelize.define("AuctionItem", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startingBid: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

module.exports = { AuctionItem }
