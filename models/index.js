// "use strict"
// var fs = require('fs');
// var path = require('path');
// const Sequelize = require('sequelize');
// var baseFileName = path.basename(__filename);
// const dataBase = {};
// const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
//     dialect: 'mysql',
//     host: CONFIG.db_host,
//     port: CONFIG.db_port
// });


// fs.readdirSync(__dirname)
//     .filter(file => {
//         return (file.indexOf('.') !== 0) && (file !== baseFileName) && (file.slice(-3) == '.js');
//     }).forEach(file => {
//         var model = require(path.join(__dirname, file)) (sequelize, Sequelize.DataTypes);
//         dataBase[model.name] = model;
//     });
// Object.keys(dataBase).forEach(model => {
//     if (dataBase[model].associate) dataBase[model].associate(dataBase);
// });

// dataBase.sequelize = sequelize;
// dataBase.Sequelize = Sequelize;

// async function initializeDatabase() {
//     try {
//         await sequelize.authenticate();
//         console.log('Database connected successfully!');
//         await sequelize.sync({ alter: true });
//         console.log('Database synchronized successfully!');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error.message);
//     }
// }

// initializeDatabase();


// module.exports = dataBase;




"use strict";


var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var db = {};
let sequelize = new Sequelize(
    CONFIG.db_name,
    CONFIG.db_user,
    CONFIG.db_password,
    {
        host: CONFIG.db_host,
        dialect: CONFIG.db_dialect,
        port: CONFIG.db_port,
        logging: false,
        ssl: true,
        define: {
            timestamps: false,
            underscored: true,
        },
        pool: {
            max: 10,
            min: 0,
            idleTime: 10000,
        },
        dialectOptions: {
            useUTC: true,
            ssl: {
                require: true, // Require SSL
            },
        },
    }
);
// console.log('in sequelize', CONFIG.db_name, sequelize);

const schemaCreate = async function () {
    const test = [];
    var schemas = await sequelize.showAllSchemas().then(
        (s) => {
            CONFIG.SCHEMAS.forEach((item) => {
                if (s.indexOf(item) < 0) {
                    sequelize.createSchema(item).then((res) => { });
                }
            });
        },
        (err) => {
            console.log("in err", err);
        }
    );
    return schemas;
};

CONFIG.SCHEMAS.forEach((item) => {
    fs.readdirSync(__dirname + "/" + item)
        .filter((file) => {
            return (
                file.indexOf(".") !== 0 &&
                file !== basename &&
                file.slice(-3) === ".js"
            );
        })
        .forEach((file) => {

            var model = require(path.join(__dirname + "/" + item, file))(
                sequelize,
                Sequelize.DataTypes
            );
            db[file.slice(0, -3)] = model;
        });
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].association) {
        db[modelName].association(db);
    }
});
db.schemaCreate = schemaCreate();
db.sequelize = sequelize;
db.Sequelize = Sequelize;


sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to SQL database:", CONFIG.db_name);
        const shema = db.schemaCreate.then(() => {
            db.sequelize.sync().then(async () => {
                console.log("Database Sync..!");
            });
        });
    })
    .catch((err) => {
        console.error(
            "Unable to connect to Postgres database:",
            CONFIG.db_name,
            err.message
        );
    });

module.exports = db;