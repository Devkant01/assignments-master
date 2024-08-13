const express = require("express");
const mongo = require("mongoose");
// const jwt = require("jsonwebtocken");

mongo.connect("mongodb+srv://devkantsah43:Devmong%4043@cluster0.qeg0cnu.mongodb.net/AuthenticationDB?");

const app = express();
const port = 3000;

// describing model of db
const users = mongo.model('users', {
    uname: String,
    psw: String,
    name: String
})

app.use(express.json());

app.post('/signup', async function (req, res) {
    let { uname, psw, name } = req.body;
    // let psw = req.body.psw;
    //let name = req.body.
    let existing = await users.findOne({ uname: uname });
    if (existing) {
        return res.status(403).send("Signup failed: Username already exists.");
    }
    let newUser = new users({
        uname,
        psw,
        name
    });
    newUser.save();
    res.json({
        status: "Signup completed successfully. Welcome!"
    });
})

app.listen(port, function () {
    console.log(`server running on localhost:${port}`);

})