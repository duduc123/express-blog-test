let mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/201701node');
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
let User = mongoose.model('User',UserSchema);
exports.User = User;