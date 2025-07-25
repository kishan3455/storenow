const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const upload = require("../middleware/upload");
//const cloudinary = require("../utils/cloudinary"); // optional if not using file uploads

// POST: Add a new product (supporting file OR URL)
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    // Priority 1: image file through multer
    if (req.file) {
      // Cloudinary upload
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }
    // Priority 2: image URL passed directly
    else if (req.body.image) {
      imageUrl = req.body.image;
    } else {
      return res
        .status(400)
        .json({ error: "Image file or image URL is required" });
    }

    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category || "",
      inStock: req.body.inStock === "true" || true,
      imageUrl: imageUrl,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error saving product:", err.message);
    res.status(500).json({ error: "Server Error: " + err.message });
  }
});

// GET: Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server Error: " + err.message });
  }
});

module.exports = router;
