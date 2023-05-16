const express = require('express');
const Model = require('./models');
const router = express.Router();

//Create User
router.post('/create', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        apps: req.body.apps
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
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get User
router.post('/getUser', async (req, res) => {
    try {
        // const data = await Model.find({ "username": req.body.username, "password": req.body.password});
        const user = await Model.find({
            "username": req.body.username
        });
        if (user[0]) {
            const data = await Model.find({
                "username": req.body.username,
                "password": req.body.password
            });
            if (data[0]) {
                res.json(data[0]);
            } else {
                res.status(401).json({ message: `Wrong password for user ${req.body.username}` });
            }
        } else {
            res.status(401).json({ message: `Unknown user ${req.body.username}` });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
