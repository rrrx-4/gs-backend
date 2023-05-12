// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./connectDB/connectDB')
// const fetch = require('node-fetch')

import express from 'express'
import cors from 'cors'
import connectDB from './connectDB/connectDB.js'
import fetch from 'node-fetch'
import dotenv from 'dotenv';
import { router } from './routes/routeruser.js'
import { User } from './models/usermodel.js'



dotenv.config();
// require('dotenv').config();

const app = express();


app.use(cors());

app.use(express.json({ limit: '50mb' }))
const port = 5000;

app.use('/', router)

async function getUser() {
    const users = await fetch('https://gorest.co.in/public/v2/users?page=1&per_page=10');

    const resp = await users.json()

    User.create(resp);
    // console.log(resp);
}


const start = async () => {

    try {
        await connectDB(process.env.MONGO_URL);

        app.listen(port, () => {
            console.log(`Server is listeing on port ${port}`);
        })
    } catch (error) {

        console.log(error);
    }



}

start();
// getUser();