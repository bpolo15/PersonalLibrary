const express = require('express');
const router = express.Router();
const Book = require("../models/library");
const Notes = require("../models/notes")

router.get("/api/books", (req, res) => {
    // Book.selectAll()
    // .then(results => res.json(results))
    // .catch(err => res.jeson(err))
    Book.innerJoin()
    .then(results => res.json(results))
    .catch(err => res.json(err))
    
});



router.get("/api/book/:id", (req, res) => {
    Book.selectAll()
    .then(result =>res.json(result))
    .catch(err => res.json(err))
});

router.get("/api/note", (req, res) => {
    Notes.selectAll()
    .then(result =>res.json(result))
    .catch(err => res.json(err))
});


router.post("/api/book/new", (req, res) => {
    Book.create(["title", "coverPhoto", "authorID"], [req.body.title, req.body.coverPhoto, req.body.authorId])
    .then(result => res.json({id: result.insertID}))
    .catch(err => res.json(err))
});

module.exports = router;