const Question = require("./questionschema.js");

addqstn = {
    add(userObject, response) {

        Question.create(userObject, function(error) {
            if (error) {
                response.send("Can't Add a Question");
            } else {
                response.send("Question Added...")
            }
        });
    },
    // showques(){
    //     var q = Question.collection.find();
    //     console.log("question are ",q);
    // }
}

module.exports = addqstn