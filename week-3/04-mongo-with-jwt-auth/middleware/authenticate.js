const zod = require("zod");

// zod schema
const authSchema = zod.object({
    username: zod.string().min(1, "Username size > 1"),
    password: zod.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_@$]).{8,}/g, "Password must include a-z, A-Z, 0-9 and -_@$ character and length >= 8")
})

//authentication middleware
function authenticate(req, res, next) {
    const { username, password } = req.body;
    const response = authSchema.safeParse({ username, password });
    if (response.success) {
        next();
    }
    else {
        res.status(401).json({
            message: "invalid inputs",
            Error: response.error.issues.map((i) => i.message)
        })
    }
}

module.exports = authenticate;