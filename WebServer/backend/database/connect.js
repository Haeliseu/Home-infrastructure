const {Sequelize} = require('sequelize');
const sequelize =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: process.env.DB_POOL
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync({force: false}).catch(err => console.log("Erreur de connexion à la base de données. " + err));
db.User = require("../models/User.js")(sequelize, Sequelize);

module.exports = db;