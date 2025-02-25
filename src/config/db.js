const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
        process.exit(1); // End process case connection fails
    }
};

module.exports = connectDB;


// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch((error) => console.log('Error connecting to MongoDB: ', error));