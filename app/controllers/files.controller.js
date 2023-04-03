const db =require("../models");
const Files = db.files;
const createFiles = (req, res) => { 
 console.log("create files");
    // Files.create({
    //   filename: req.body.filename,
    //   fileCOntent: req.body.content
    // })
    //   .then((newfile) => {
    //     res.send({
    //       message: "File added successfully!",
    //       data: { newfile },
    //     });
    //   })
    //   .catch((err) => {
    
    //     res.status(500).send({ message: err.message });
    //   });
  };
  const deleteFile = (req, res) => {
    Study.destroy({ where: { id: req.params?.id } })
      .then((study) => {
        res.send({ message: "File deleted successfully!" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  const getFiles = (req, res) => {
  
    Files.findAll()
       .then(async (files) => {
         res.send(files);
       })
       .catch((err) => {
         res.status(500).send({ message: err.message });
       });
  };

  module.exports= {
    deleteFile,
    createFiles,
    getFiles,
  }