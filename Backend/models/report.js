const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  internshipTitle: String,
  companyName: String,
  location: String,
  contactMethod: String,
  description: String,
  anonymous: Boolean,
  screenshots: [String],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
