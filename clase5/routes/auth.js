//Definir rutas de la aplicacion

const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const {authMdw} = require("../middleware");
const { userService } = require('../services');

router.post("/", async(req,res) =>{
    const {user, pass} = req.body;
    if(user === 'admin' && pass === 'admin'){
        const token = jwt.sign({user, role: 'Admin'}, authMdw.SERVER_SECRET);
        res.json({token});
    }else{
        const userFound = await userService.validateUser(user, pass);
        if(userFound){
            const token = jwt.sign({user, role: 'User'}, authMdw.SERVER_SECRET);
            res.json({token});
        }
        res.status(401).json({error: "Invalid User"});
    }
});

module.exports = router;
