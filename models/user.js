// getting the mongoose library
const mongoose = require('mongoose');
// needed for creating the user schema
const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true},
	name: String,
	password: String,
	photo: String,
	tweets: [{
		tweet: { type: Schema.Types.ObjectId, ref: 'Tweet'}
	}]
});

module.exports = mongoose.model('User', UserSchema);