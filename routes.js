const express = require('express');
const Model = require('./models');
const router = express.Router();

//Create User
router.post('/add', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        lastname1: req.body.lastname1,
        lastname2: req.body.lastname2,
        email: req.body.email,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        currentCompany: req.body.currentCompany,
        coverage: req.body.coverage
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get Users
router.get('/list', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
