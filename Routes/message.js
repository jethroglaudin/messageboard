const express = require('express');
const router = express.Router();
const Message = require('../Models/Message');


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

router.get("/:username", async (req, res) => {
    const username = req.params.userName;
    const userMessages = await Message.find({ userName: username });
    if(userMessages == null){
       return res.status(404).send(`User was not found`);
    };
    res.send(userMessages);
});

router.put('/:id', async (req, res) => {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id,{
        userName: req.body.userName,
        email: req.body.lastName,
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
