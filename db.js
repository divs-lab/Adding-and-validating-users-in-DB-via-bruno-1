
const {connect} = require('mongoose');

const connectDB = async(db_URI) => {
    try{
        await connect(db_URI);
        console.log('Connected to database');
    }
    catch(err){
        console.log('error connecting to db',err);
    }
}

module.exports = connectDB;
