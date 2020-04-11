const ORM = require("../config/ORM.js");

class Notes {

    selectAll(){
        return ORM.selectAll("notes")

    }
    update(){
        return ORM.update("notes", objColVals, id)

    }
    
    create(columns, values) {
        return ORM.create("books", columns, values)
    }
}

module.exports = new Notes();