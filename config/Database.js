const mongoose = require("mongoose");
require ("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopoloy: true,
    } )
    .then(() => console.log ("DB connection is successful"))
    .catch((error) => {
        console.log ("Isusses in DB connection");
        console.error(error.message)
        process.exiy(1)
    });
}

module.exports = dbConnect;