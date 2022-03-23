const Author = require("../models/author");
const getAuthors = (req, res) => {
  Author.find((err, author_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(author_list);
    }
  });
};
const createAuthor = (req, res) => {
  const authorObject = new Author(req.body);
  authorObject.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "Added author successfully" });
    }
  });
};
const deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        status: `author with id as ${req.params.id} is removed`,
      });
    }
  });
};
module.exports = { getAuthors, createAuthor, deleteAuthor };
