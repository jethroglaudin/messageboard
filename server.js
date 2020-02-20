const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();
const messages = require("./Routes/message");
const mongoDB = require('./config/keys');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(mongoDB.MongoURI, 
    { useNewUrlParser: true })
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
    
app.use('/api/messages/', messages);

app.listen(PORT, () => console.log(`Server is currently listening on PORT ${PORT}`))
