const express = require("express");
const router = express.Router();
const Upload = require("../controllers/upload.controller");

const { uploadImages, deleteCloudImage } = Upload;

router.route("/").post(uploadImages);
router.route("/delete").delete(deleteCloudImage);

module.exports = router;
