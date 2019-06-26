var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DB', { useNewUrlParser: true });
var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.methods.isValid = function() {

}



module.exports = mongoose.model("users", userSchema);