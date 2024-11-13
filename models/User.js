const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
   name : String,
   gender :String,
   age: Number,
   country:String
});
