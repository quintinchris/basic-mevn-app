const express = require('express');
const router = express.Router();
// const model = require(./models/Model);

router.get('/', async (req, res, next) => {
    try {
        // const model = await Model.find()
        res.send("Hello World!")
    } catch (error) {
        next(error)
    }
});

module.exports = router;