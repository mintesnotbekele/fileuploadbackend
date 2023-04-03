const controller= require("../controllers/files.controller.js"); 
const express = require("express");
const router = express.Router();

router.post(
    "/createFile",
    controller.createFiles
  );
  
  router.delete(
    "/deleteFile/:id",
    controller.deleteFile
  );
  router.get(
    "/getFiles",
    controller.getFiles
  );

  module.exports = router;