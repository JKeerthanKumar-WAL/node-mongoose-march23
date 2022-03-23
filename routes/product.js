const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProductWithId);
router.put("/:id", productController.updateProduct);
router.get("/:id", productController.getProductWithId);
router.get("/productsearch/:name", productController.getProductWithName);
router.get(
  "/productsearch/availability/:availability",
  productController.getProductWithAvailability
);
router.get(
  "/productsearch/price/:price",
  productController.getProductWithPrice
);

module.exports = router;
