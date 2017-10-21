const User = require("./studentschema.js");
const abc = require("./questionschema.js");

// function caal(response) {
//     abc.find({}, (err, data) => {
//         //console.log("array is", data);
//         // console.log("value of is",);
//         response.render('displayquestions', {
//             users: data
//         })


//     });
// }
userOperation = {
    add(userObject, response) {
        const logger = require("./logger");

        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(11);
        var hash = bcrypt.hashSync(userObject.password, salt);
        console.log("Hash is ", hash);
        userObject.password = hash;
        User.create(userObject, function (error) {
            if (error) {
                response.send("Can't Add a New User");
                logger.debug("Error Occur During Addition of New User", error)
            } else {
                logger.debug("Record Added SuccessFully ");
                response.send("Student Added...")
            }
        });
    },
    search(userObject, response, request) {
        var bcrypt = require('bcryptjs');
        const logger = require("./logger");
        
        console.log('request is...1',request)
        User.find({
            'userid': userObject.userid,
            //'password': userObject.password
        }, function (error, docs) {
            if (error) {
                response.send('Some Problem in DB Connection');
            } else {
                if (docs.length == 0) {
                    console.log(docs[0]);
                    response.send('Invalid Userid or Password 1');
                }
                else {
                    console.log(docs[0]);
                    if (bcrypt.compareSync(userObject.password, docs[0].password)) {
                        //console.log("request is....2", request);
                        // request.session.uid = docs[0].userid;
                        // response.render('displayquestions.ejs', { users: request.session.uid });
                        abc.find({}, (err, data) => {
                            //console.log("array is", data);
                            // console.log("value of is",);
                            response.render('displayquestions', {
                                users: data
                            })
                            logger.debug("record succesfully found...")
                    
                        });
                    } else {
                        // console.log("docs is",docs[0]);
                        // caal(response);
                        response.send("Invalid Userid or password 2");
                    }
                    //response.send("welcome "+docs[0].userid);
                    //    callme(response);


                }
            }
        })
    }

}
// function callme(response){
//     console.log("callingme")
//     abc.findOne({'userid':userObject.userid,'password':userObject.password},function(error,docs){
//         if(error){
//             console.log("some problem")
//             response.send('Some Problem in my Connection');   
//         }
//         else{
//             console.log(docs[0]);
//             response.send(docs[0]);
//         }
//     });
// }

module.exports = userOperation;
//  abc.findOne(function(err,doc){
//         if(err){
//             console.log("some problem")
//             response.send('Some Problem in my Connection');   
//         }
//         else{
//             console.log(doc[0]);
//             response.send(doc[0]);
//         }
//     });