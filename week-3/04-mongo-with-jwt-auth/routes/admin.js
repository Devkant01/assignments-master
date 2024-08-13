const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const authenticate = require("../middleware/authenticate");
const jwt = require("jsonwebtoken");
const router = Router();
const SECRET_KEY = "Authentication010";

// Admin Routes
router.post('/signup', authenticate, async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const isAvailable = await Admin.findOne({ username })
    if (isAvailable) {
        res.status(200).send("Admin already exist");
    } else {
        await Admin.create({ //in mongoose nothing like insertOne...
            username,
            password
        })
        res.status(201).send('Admin created successfully');
    }
});

router.post('/signin', authenticate, async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const isAvailable = await Admin.findOne({ username })
    if (isAvailable) {
        const token = jwt.sign({ username, password }, SECRET_KEY);
        res.status(200).json({
            token
        })
    } else {
        res.json({
            message: "Invalid Admin"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, imageLink, price } = req.body;
    const ifAvail = await Course.find({ title });
    if (!ifAvail) {
        res.json({
            message: "Course already Exist"
        })
    } else {
        const courseId = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        res.status(203).json({
            message: "Course created successfully",
            courseId: courseId._id
        })
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.status(300).json({
        courses
    })
});

module.exports = router;