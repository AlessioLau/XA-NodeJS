//Definir rutas de la aplicacion

const express = require('express');
const {bookController} = require('../controllers');
const router = express.Router();

router.post("/", bookController.createBookController);

router.get("/:bookId", bookController.getBookController);

router.put("/:bookId", (req, res) => {
    console.log(`Founded book with ID: ${req.params.bookId}`)
    //... desestructuracion crear objeto con los mismos datos guardados anteriormente
    res.json({id: req.params.bookId, ...req.body});
});

router.delete("/:bookId", (req, res) => {
    console.log(`Founded book with ID: ${req.params.bookId}`)
    //... desestructuracion crear objeto con los mismos datos guardados anteriormente
    res.json({id: req.params.bookId, ...req.body});
});

module.exports = router;
