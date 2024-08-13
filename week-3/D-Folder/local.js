const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    for (let i of ALL_USERS) {
        if (i.username == username && i.password == password) {
            return true;
        }
    }
    return false;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    console.log(token);
    
    jwt.verify(token, jwtPassword, (err, data) => {
        if (err) {
            res.send("token invalid");
        }
        else {
            res.json({
                data
            })
        }
    });
    // const username = decoded.username;
    // return a list of users other than this username
    // res.send(username);
});

app.listen(3000, () => {
    console.log('running');
})