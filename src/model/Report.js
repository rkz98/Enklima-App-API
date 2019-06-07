const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    id: Number,
    officer_id: String,
	report: String,
    place: String,
    status: String,
	created_at: Date
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;