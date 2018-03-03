// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================

// GET route for getting all of the posts
router.get("/api/posts", function (req, res) {
  var query = {};
  if (req.query.author_id) {
    query.AuthorId = req.query.author_id;
  }
  db.Post.findAll({

    where: query,

    include: [db.Author]

  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

// Get rotue for retrieving a single post
router.get("/api/posts/:id", function (req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  });
});

// POST route for saving a new post
router.post("/api/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

// PUT route for updating posts
router.put("/api/posts", function (req, res) {
  db.Post.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;