const Product = require("../models/product");
const getProducts = (req, res) => {
  Product.find((err, product_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product_list);
    }
  });
};
const createProduct = (req, res) => {
  productObject = new Product(req.body);
  productObject.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "Added product successfully" });
    }
  });
};
const deleteProductWithId = (req, res) => {
  Product.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `Product with id as ${req.params.id} is removed` });
    }
  });
};
const updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `Product with id as ${req.params.id} is updated` });
    }
  });
};
const getProductWithId = (req, res) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
const getProductWithName = (req, res) => {
  Product.find({ name: req.params.name }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
const getProductWithAvailability = (req, res) => {
  Product.find({ availability: req.params.availability }).exec(
    (err, product) => {
      if (err) {
        res.json(err);
      } else {
        res.json(product);
      }
    }
  );
};
const getProductWithPrice = (req, res) => {
  Product.find({ price: { $gte: req.params.price } }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
module.exports = {
  getProducts,
  createProduct,
  deleteProductWithId,
  updateProduct,
  getProductWithId,
  getProductWithName,
  getProductWithAvailability,
  getProductWithPrice,
};
