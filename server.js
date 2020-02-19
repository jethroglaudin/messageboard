const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();
const users = require("./Routes/user");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users/', users);

app.listen(PORT, () => console.log(`Server is currently listening on PORT ${PORT}`))
