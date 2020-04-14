const ORM = require("../config/ORM.js");

class Notes {

    getBookNotes(bookId){
        return ORM.innerJoinOne(['notes.id', 'title', 'note'], 'books', 'notes', 'id', 'bookId', bookId)

    }
    addBookNote(values){
        return ORM.create("notes", ['note', 'bookId'], values)

    }

    deleteBookNote(value){
        return ORM.delete("notes", 'id', value)
    }
};

module.exports = new Notes();