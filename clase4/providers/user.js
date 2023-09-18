const {User, Ticket} = require('../models');

const createUser = async (user) => {
    try{
        const newUser = await User.create(user);
        return newUser;
    }catch(err){
        console.error("Error when creating User", err);
        throw err;
    }
};

const getUser = async (userId) => {
    try{
        const user = await User.findByPk(userId, {include:{all: true}});
        return user;
    }catch(err){
        console.error("Error when fetching User", err);
        throw err;
    }
};


const createTicket = async (userId, ticket) => {
    try{
        const newTicket = await Ticket.create({...ticket, UserId: userId});
        return newTicket;
    }catch(err){
        console.error("Error when creating Ticket", err);
        throw err;
    }
};

module.exports = { createUser , getUser, createTicket};