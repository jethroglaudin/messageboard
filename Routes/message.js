const express = require('express');
const router = express.Router();
const Message = require('../Models/Message');
const isEmpty = require("is-empty");


// router.get("/", async (req, res) => {
//     res.send("Route is working");
// });


// GET api/users/
// @desc: GET MESSAGES
// access: public

router.get("/getallmessages", async (req, res) => {
    const messages = await Message.find();
    if(!messages) return res.status(404).send(`No messages found`);
    res.send(messages);
})

// POST api/users/
// @desc: create message 
// access: public
router.post("/", async (req, res) => {
    const { userName, email, message } = req.body;
    console.log(req.body);

    if(!userName || !email || !message) {
        return res.status(400).send("Input field is missing");
    }

    let newMessage = new Message({
        userName,
        email,
        message 
    });

    newMessage = await newMessage.save();
    res.json(newMessage);
});

// POST api/users/:username
// @desc: Get a user's messages
// access: public

router.get("/:userName", async (req, res) => {
    const userName = req.params.userName;
    const userMessages = await Message.find({ userName: userName });
    if(isEmpty(userMessages)){
       return res.status(404).json("no messages");
    };
    res.send(userMessages);
    // Message.find({ userName: username },).then(user => {
    //     if(!user) {
    //         errors.noMessage = "No message found with that username"
    //         res.status(404).json(errors);
    //     }
    //     res.json(user);
    // })
    // .catch(err => res.status(404).send(err));
});

router.put('/:id', async (req, res) => {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id,{
        userName: req.body.userName,
        email: req.body.email,
        message: req.body.message
    }, { new: true });

    if(!updatedMessage) return res.status(404).send(`No message found with that ID`);

    res.json(updatedMessage);


});

router.delete("/:id", async (req, res) => {
    const message = await Message.findByIdAndRemove(req.params.id);
    if(!message) return res.status(404).send(`No message found`);
    res.json(message);
})


module.exports = router;
