const Book = require("../models/book");
const getBooks = (req, res) => {
  Book.find((err, book_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(book_list);
    }
  });
};
const createBook = (req, res) => {
  const bookObject = new Book(req.body);
  bookObject.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "Added book successfully" });
    }
  });
};
const deleteBookById = (req, res) => {
  Book.findByIdAndDelete(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `Book with id as ${req.params.id} is removed` });
    }
  });
};
const updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `Book with id as ${req.params.id} is updated` });
    }
  });
};
const getBookWithAuthor = (req, res) => {
  Book.find()
    .populate("author")
    .exec((err, book_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 1, data: book_list });
      }
    });
};
const getBookWithCondition = (req, res) => {
  Book.find({ name: req.params.name }).exec((err, book_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 1, data: book_list });
    }
  });
};
const getBookWithAuthorAndCategory = (req, res) => {
  Book.find()
    .populate("author")
    .populate("category")
    .exec((err, book_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json(book_list);
      }
    });
};
const getBookWithId = (req, res) => {
  Book.findById(req.params.id).exec((err, book) => {
    if (err) {
      res.json(err);
    } else {
      res.json(book);
    }
  });
};
module.exports = {
  getBooks,
  createBook,
  deleteBookById,
  updateBook,
  getBookWithAuthor,
  getBookWithCondition,
  getBookWithAuthorAndCategory,
  getBookWithId,
};
