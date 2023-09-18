//Definir rutas de la aplicacion

const express = require('express');
const {userController} = require('../controllers');
const router = express.Router();
const {authMdw} = require("../middleware");

router.post("/", authMdw.jwtValidMDW, authMdw.userIsAdminMDW, userController.createUser);
router.get("/:userId", authMdw.jwtValidMDW ,userController.getUser);
router.post("/:userId/ticket", userController.createTicket);

module.exports = router;
