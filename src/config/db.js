import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
        process.exit(1); // End process case connection fails
    }
};

export default connectDB;


// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch((error) => console.log('Error connecting to MongoDB: ', error));