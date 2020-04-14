const express = require('express');
const router = express.Router();
const Book = require("../models/library");
const Notes = require("../models/notes")

router.get("/api/books", (req, res) => {
    // Book.selectAll()
    // .then(results => res.json(results))
    // .catch(err => res.jeson(err))
    Book.getAllBooks()
    .then(results => res.json(results))
    .catch(err => res.json(err))
    
});

router.delete('/api/note/:id', (req, res) => {
    Notes.deleteBookNote(req.params.id)
    .then(()=> res.status(200).json(true))
    .catch(err => res.json(err))
    });

router.get("/api/book/:id", (req, res) => {
    const bookId = req.params.id
    Book.getOneBook(bookId)
    .then(result =>res.json(result))
    .catch(err => res.json(err))
});

router.get("/api/note", (req, res) => {
    Notes.getBookNotes()
    .then(result =>res.json(result))
    .catch(err => res.json(err))
});


router.post("/api/book/new", (req, res) => {
    const{ title, coverPhoto, authorId} = req.body;
    Book.addBook([title, coverPhoto, authorId])
    .then(()=>res.status(200).json(true))
    .catch(err => res.status(500).json(err))
});

router.get("/api/book/notes/:id", (req, res)=>{
    const bookId = req.params.id;
    Notes.getBookNotes(bookId)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
});

router.post("/api/book/note", (req, res) => { 
    const {note, bookId} = req.body;
    Notes.AddBookNote([note, bookId])
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
});


module.exports = router;