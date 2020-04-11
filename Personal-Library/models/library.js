const ORM = require("../config/ORM.js");

class Book {

    selectAll(){
        return ORM.selectAll("books")

    }
    innerJoin(){
        return ORM.innerJoin(['firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')   
    }
    
    create(columns, values) {
        return ORM.create("books", columns, values)
    }
}

module.exports = new Book();