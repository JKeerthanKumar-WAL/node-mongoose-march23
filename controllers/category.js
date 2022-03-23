const Category = require("../models/category");
const getCategories = (req, res) => {
  Category.find((err, category_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(category_list);
    }
  });
};
const createCategory = (req, res) => {
  const categoryObject = new Category(req.body);
  categoryObject.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "Added category successfully" });
    }
  });
};
const deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id, req.body, function (err) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `category with id as ${req.params.id} is removed` });
    }
  });
};
const updateCategory = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `category with id as ${req.params.id} is updated` });
    }
  });
};
module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
