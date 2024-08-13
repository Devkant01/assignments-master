const jwt = require("jsonwebtoken");
const SECRET_KEY = "Authentication010";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (token == undefined) {
        res.status(401).json({
            message: "Please provide a token in the Authorization header."
        })
    } else {
        const actualToken = token.split(" ");
        try {
            jwt.verify(actualToken[1], SECRET_KEY);
            next()
        } catch (e) {
            res.status(401).json({
                Error: e.message,
                message: "Authentication Failed"
            })
        }
    }
}

module.exports = adminMiddleware;