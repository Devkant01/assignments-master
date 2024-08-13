const { Router } = require("express");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const authenticate = require("../middleware/authenticate");
const SECRET_KEY = "Authentication010";

// User Routes
router.post('/signup', authenticate, async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const isAvailable = await User.findOne({ username })
    if (isAvailable) {
        res.status(200).send("User already exist");
    } else {
        await User.create({ //in mongoose nothing like insertOne...
            username,
            password
        })
        res.status(201).send('User created successfully');
    }
});

router.post('/signin', authenticate, async (req, res) => {
    // Implement User signup logic
    const { username, password } = req.body;
    const isAvailable = await User.findOne({ username })
    if (isAvailable) {
        const token = jwt.sign({ username, password }, SECRET_KEY);
        res.status(200).json({
            token
        })
    } else {
        res.json({
            message: "Invalid User"
        })
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.status(300).json({
        Available_Courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const courseExist = await Course.findOne({ _id: courseId });
    if (!courseExist) {
        return res.status(404).json({
            message: "Course not found"
        })
    }
    // does user already bought this course
    const user = await User.findOne({ username: req.decodedUsername }, { purchasedCourses: 1 });
    if (user.purchasedCourses.includes(courseId)) {
        return res.status(404).json({
            message: "course already purchased"
        })
    }
    const updateUserDb = await User.updateOne({
        username: req.decodedUsername
    },
        {
            $push: {
                purchasedCourses: courseId
            }
        });
    if (updateUserDb.modifiedCount === 0) {
        return res.status(400).json({
            message: "Failed to purchase course or course already purchased"
        })
    }
    res.status(201).json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({ username: req.decodedUsername }, { purchasedCourses: 1 });
        if (!user || user.purchasedCourses.lenght == 0) {
            return res.json({
                message: "Zero courses purchased"
            })
        }
        res.json({
            TotalPurchased: user.purchasedCourses.length,
            purchasedCourses: user.purchasedCourses
        })
    } catch (e) {
        res.status(500).json({
            message: "An error occurred",
        })
    }

});

module.exports = router