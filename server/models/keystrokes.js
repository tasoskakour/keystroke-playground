// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// user schema
var KeystrokeSchema = new Schema({
    username: String,
    keyAscii: { type: [Number], required: true },
    timeDiffs: { type: [Number], required: true }
});




// return the model
module.exports = mongoose.model('KeystrokeDataModel', KeystrokeSchema);