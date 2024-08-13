const jwt = require("jsonwebtoken");
const SECRET_KEY = "Authentication010";
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (token == undefined) {
        res.status(401).json({
            message: "Please provide a token in the Authorization header."
        })
    } else {
        const actualToken = token.split(" ");
        try {
            const decode = jwt.verify(actualToken[1], SECRET_KEY);
            console.log(decode);
            req.decodedUsername = decode.username;
            next()
        } catch (e) {
            res.status(401).json({
                Error: e.message,
                message: "Authentication Failed"
            })
        }
    }

} 

module.exports = userMiddleware;