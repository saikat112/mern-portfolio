const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;
connection.on('error', () => {
    console.log("Error Connecting to database");
});
connection.on('connected', () => {
    console.log('Mongo DB Connection Succesful');
});
module.exports = connection;


// , {
//     useNewUrlParser: true,
//     userUnifiedTopology: true,
//     useCreateIndex: true,

// }
