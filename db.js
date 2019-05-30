require('dotenv').config(); //process.env.KEY is now accessible
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_LOGIN, { useNewUrlParser: true });
