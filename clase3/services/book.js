// Los servicios manejan la logica de negocio
// Que hace mi sistema para funcionar

const fs = require("fs");
const path = require("path");

const createBook = async (req, res) => {
    const bookName = JSON.stringify(req.body.name);
    const filePath = path.join(__dirname, "../", `${bookName}.json`);
    console.log("Filepath:", filePath);
    if (fs.existsSync(filePath)) {
      throw new Error("File Exists");
    }
    fs.writeFileSync(filePath, JSON.stringify(req.body));
    res.json({message: "Creado correctamente", name: `${req.body.name}`});
}

module.exports = {createBook};