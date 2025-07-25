// routes/upload.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // multer config
const cloudinary = require("../utils/cloudinary"); // cloudinary config

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
