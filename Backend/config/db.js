import mongoose from 'mongoose';
import express from 'express'; 
import { configDotenv } from 'dotenv';
configDotenv();
import { DB_NAME } from '../constants.js';
const app = express()


export const connectDB = async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

// module.exports = connectDB;
