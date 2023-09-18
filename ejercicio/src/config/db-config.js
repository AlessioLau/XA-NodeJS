const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

const initializeDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Established conection with the DB");
        await sequelize.sync({force: false});       
    }catch(err){
        console.error("There was an erorr initializing the DB", err);
    }
}

module.exports = {sequelize, initializeDB};