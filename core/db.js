'use strict';

const mongoose = require('mongoose');

// Database initialization
const initDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connection established.');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

// Example schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);

// Database operations
const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (userId) => {
    return await User.findById(userId);
};

// Exporting functions
module.exports = {
    initDatabase,
    createUser,
    getUserById,
};