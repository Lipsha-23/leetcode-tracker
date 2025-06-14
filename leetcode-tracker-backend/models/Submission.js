const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  status: String,
  lang: String,
  timestamp: Date,
});

module.exports = mongoose.model("Submission", submissionSchema);
