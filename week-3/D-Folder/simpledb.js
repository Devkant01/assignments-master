const mongoose = require("mongoose");
const { emit } = require("process");
mongoose.connect("mongodb+srv://devkantsah43:Devmong%4043@cluster0.qeg0cnu.mongodb.net/jsdb?");

// describing schema
//user is now collection name(inside db: jsdb)
const user = mongoose.model('users', {
    name: String,
    email: String,
    password: String
});

const admin = new user({
    name: "Devkant kumar",
    email: "devkantsah43@gmail.com",
    password: "123Dev@kant"
})
admin.save();
// mongoose.create()