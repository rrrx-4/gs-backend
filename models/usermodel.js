import mongoose from 'mongoose';
// const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    Id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    status: {
        type: String
    },
    Created_at: {
        type: Date,
        default: Date.now,
    },
    Updated_at: {
        type: Date,
        default: Date.now,
    }


})

export const User = mongoose.model('User', UserSchema);

//  default User;