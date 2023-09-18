const express = require('express');
const { initializeDB } = require('./config/db-config');

const PORT = 8050;
const app = express();

app.use(express.json()); //Parsea json (middleware incorporado a express)

app.get("/", (req, res) =>{
    res.send("<h1>Ejercicio Librerias con NodeJS<h1>")
});

app.listen(PORT, async ()=>{
    await initializeDB();
    console.log(`Server running in port: ${PORT}`);
});


