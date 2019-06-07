const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    id: Number,
	login: String,
    password: String,
    permission: String,
    name: String,
    patent: String,
    age: String,
	created_at: Date
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;