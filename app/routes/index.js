const FileRoutes =require("./files.routes.js");
const express =require("express");

const router = express.Router();
router.use("/file", FileRoutes);
router.get("/test", function (req, res, next) {
  
  next();
});

module.exports = router;