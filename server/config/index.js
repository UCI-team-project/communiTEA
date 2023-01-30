const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || process.env.LOCAL_URI);

module.exports = mongoose.connection;
