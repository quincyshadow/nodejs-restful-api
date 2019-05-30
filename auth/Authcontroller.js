var jwt = require('jsonwebtoken');var bcrypt = require('bcryptjs')
require('dotenv').config(); //process.env.KEY is now accessible

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());var User = require('../user/User');

router.post('/register', function(req, res)
{
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user)
  {
    if (err) return res.status(500).send("There was a problem registering the user.")
  });
