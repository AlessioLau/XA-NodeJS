
// El que sabe como crear usuarios es el provider

const {userProvider} = require('../providers')

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if(user){
    console.log(user.firstName);
  }
  return await userProvider.getUser(userId);
};

const createTicket = async (userId, ticket) => {
  const user = await userProvider.getUser(userId);
  if(user){
    const newTicket = await userProvider.createTicket(userId, ticket);
    return newTicket;
  }
  return null;
};


module.exports = {createUser, getUser, createTicket};