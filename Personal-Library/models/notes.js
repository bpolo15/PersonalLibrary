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

    remove(columns, condition){
        return ORM.delete("notes", columns, condition)
    }
};

module.exports = new Notes();