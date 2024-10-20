const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("Genix", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

module.exports = sequelize
