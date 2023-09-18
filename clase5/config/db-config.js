const {Sequelize} = require('sequelize'); 

//Singleton: una sola instancia de sequelize para toda la app
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

const initializeDB = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.query('SELECT 1+3333 as que')
        console.log("Conexion a la base de datos establecida");
        await sequelize.sync({force: true}); // Drop table if true
    }catch(error){
        console.error("There was an error when initializing the DB", error);
    }
};

module.exports = {sequelize, initializeDB};