const ORM = require("../config/ORM.js");

class Book {

    getAllBooks(){
        return ORM.innerJoin(['books.id', 'firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')

    }
    getOneBook(bookId){
        return ORM.innerJoinOne(['books.id', 'firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId', bookId)   
    }
    
    addBook(columns, values) {
        return ORM.create("books", ['title', 'coverPhoto', 'authorId'], values)
    }
}

module.exports = new Book();