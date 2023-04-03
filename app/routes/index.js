const FileRoutes =require("./files.routes.js");
const express =require("express");

const router = express.Router();
router.use("/file", FileRoutes);
router.get("/test", function (req, res, next) {
  console.log("Test");
  next();
});

module.exports = router;