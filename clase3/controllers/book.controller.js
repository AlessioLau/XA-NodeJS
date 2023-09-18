// Controller maneja la peticion que llega y como interactua con el sistema
// Manejar la logica de la ruta y llamar a los servicios

const { bookService } = require("../services");

const createBookController = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req, res);
    res.json(newBook);
  } catch (err) {
    res.status(400).json({ action: "CreateBook", error: err.message });
  }
};

const getBookController = (req, res) => {
  console.log(`Founded book with ID: ${req.params.bookId}`);
  res.json({ id: req.params.bookId, name: "A" });
};

module.exports = {
  createBookController,
  getBookController,
};
