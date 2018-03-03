const db = require("../models");
const express = require('express');
const router = express.Router();

// Find all Authors and return them to the user with res.json
router.get("/api/authors", function (req, res) {
  db.Author.findAll({
    include: [db.Post]
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.get("/api/authors/:id", function (req, res) {
  // Find one Author with the id in req.params.id and return them to the user with res.json
  db.Author.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.post("/api/authors", function (req, res) {
  // Create an Author with the data available to us in req.body
  console.log(req.body);
  db.Author.create(req.body).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.delete("/api/authors/:id", function (req, res) {
  // Delete the Author with the id available to us in req.params.id
  db.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

module.exports = router;