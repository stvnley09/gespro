require('dotenv').config();//Charger les variables d'environnement
const config = require('../config.json')[process.env.NODE_ENV];
const { Sequelize } = require('sequelize');

console.log('NODE_ENV:', process.env.NODE_ENV);

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: 5432,
  dialect: config.dialect,
});

module.exports = sequelize;
