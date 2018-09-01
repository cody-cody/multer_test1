const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const multer = require("multer");

const upload = multer({
  dest: path.join(__dirname, './upload')
});

const findFileByFieldname = (files, fieldname) => {
  return files.find(file => file.fieldname === fieldname) || {};
}

var cpUpload = upload.fields([
  { name: "upfile1", maxCount: 2 },
  { name: "upfile2", maxCount: 2 }
]);

app.post("/upload", cpUpload, (req, res) => {  
  const upfile1Filename = findFileByFieldname(req.files["upfile1"])   
  const upfile1Filename = findFileByFieldname(req.files["upfile2"]) 
  const upfile1Filename = findFileByFieldname(req.files["upfile3"]) 

  res.json({
    upfile1Filename,
    upfile2Filename,
    upfile3Filename,
  });
});


app.listen(3000);