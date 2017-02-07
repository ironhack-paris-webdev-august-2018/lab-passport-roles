/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const User = require('../models/user');

mongoose.connect("mongodb://localhost/ibi-ironhack");
var salt     = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

const boss = new User({
  username: 'Gonzalo',
  password: encryptedPass,
  role: 'Boss'
});

User.create(boss, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
  mongoose.connection.close();
});