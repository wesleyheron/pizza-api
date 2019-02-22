const mongoose = require('mongoose');
let dev_db_url = 'mongodb://u_deliciouspizza:pizza000@ds347665.mlab.com:47665/deliciouspizza';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db;