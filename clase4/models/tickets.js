const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db-config");

const Ticket = sequelize.define("Tickets", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    used:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Ticket; 