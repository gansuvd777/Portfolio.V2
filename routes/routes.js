// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/comments", function(req, res) {
   
    db.Comment.findAll()
      .then(function(result) {
        res.json(result);
      })

  });

  app.post("/api/comment", function(req, res) {

    console.log(req.body);
    let newComment = req.body;

    db.Comment.create(newComment).then(function(result) {
      res.json(result);
    });
  });

};