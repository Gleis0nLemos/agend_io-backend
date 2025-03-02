import mongoose from 'mongoose';
import config from '../../config';

const connectMongoose = async () => {
    try {
        // set options mongoose
        Object.keys(config.MONGO.OPTIONS || { }).forEach((key) => {
            mongoose.set(key, config.MONGO.OPTIONS[key])
        })

        // Connect to MongoDB
        await mongoose.connect(config.MONGO.URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
        process.exit(1); // End process case connection fails
    }
};

export default connectMongoose;
