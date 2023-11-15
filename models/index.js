"use strict"
var fs = require('fs');
var path = require('path');
const Sequelize = require('sequelize');
var baseFileName = path.basename(__filename);
const dataBase = {};
console.log("config...",CONFIG);
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    dialect: 'mysql',
    host: CONFIG.db_host,
    port: CONFIG.db_port
});


fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== baseFileName) && (file.slice(-3) == '.js');
    }).forEach(file => {
        var model = require(path.join(__dirname, file)) (sequelize, Sequelize.DataTypes);
        console.log(model.name);
        dataBase[model.name] = model;
    });
Object.keys(dataBase).forEach(model => {
    if (dataBase[model].associate) dataBase[model].associate(dataBase);
});

dataBase.sequelize = sequelize;
dataBase.Sequelize = Sequelize;

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

initializeDatabase();


module.exports = dataBase;