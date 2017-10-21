const User = require("./userschema.js");

userOperation = {
    add(userObject, response) {

        User.create(userObject, function (error) {
            if (error) {
                response.send("Can't Add a New User");
            }
            else {
                response.send("Teacher Added...")
            }
        });
    },
    search(userObject, response) {
        User.find({ 'userid': userObject.userid, 'password': userObject.password }, function (error, docs) {
            if (error) {
                response.send('Some Problem in DB Connection');
            }
            else {
                if (docs.length == 0) {
                    response.send('Invalid Userid or Password');
                }
                else {
                    //console.log("docs is", docs[0])
                    //response.send('Welcome '+docs[0].userid);
                    response.render('question')
                }
            }

        }
        )
    }
}
module.exports = userOperation