// const express = require('express')
// const mongoose = require('mongoose');
// const cors = require("cors");
// const path = require('path')

import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
const __dirname = path.resolve();
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';



const SECRET = process.env.SECRET || "12345"

const PORT = process.env.PORT || 5000
const app = express()
app.use(cookieParser())

mongoose.connect('mongodb+srv://admin:admin@cluster0.t5qza.mongodb.net/UsersData?retryWrites=true&w=majority');

const User = mongoose.model('UsersSignup', {
    name: String,
    email: String,
    password: String,
    contact: String,
    address: String,
    website: String,
    created: { type: Date, default: Date.now },
});

const Post = mongoose.model('UsersPosts', {
    post: String,
    createdby: String,
    created: { type: String, default: Date.now },
});

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}))


app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})


app.post('/api/v1/login', async (req, res) => {
    if (!req.body.email ||
        !req.body.password
    ) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }
    // console.log("req.body: ", req.body);
    try {
        const user = await User.findOne({ email: req.body.email });
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            // User.findOne({ email: req.body.email }, (err, user) => {

            if (!err) {
                // res.status(500).send("error in getting database")
                // } 
                if (result) {
                    var token = jwt.sign({
                        name: user.name,
                        email: user.email,
                        _id: user._id,
                    }, SECRET);
                    console.log("token created: ", token);

                    res.cookie("token", token, {
                        httpOnly: true,
                        // expires: (new Date().getTime + 300000), //5 minutes
                        maxAge: 300000
                    });
                    // if (user.password === req.body.password) {
                    res.send(user);
                } else {
                    res.send("Authentication fail");
                }
            }
        });
    }
    catch (error) {
        res.send("Authentication fail")
    }
})

// app.get('/api/v1/login', async (req, res) => {})
// app.put('/api/v1/login', async (req, res) => {})
// app.delete('/api/v1/login', async (req, res) => {})

app.post('/api/v1/signup', async (req, res) => {

    if (!req.body.email ||
        !req.body.password ||
        !req.body.name
    ) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    } else {
        User.findOne({ email: req.body.email }, async (err, user) => {
            if (user) {
                res.send("user already exist");
            } else{
        console.log(req.body)
        const salt = await bcrypt.genSalt(10);
        const setPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            name: req.body.name,
            email: req.body.email,
            password: setPass,
            address: req.body.address,
            contact: req.body.contact,
            website: req.body.website,
        })
        newUser.save(() => {
            console.log("data saved")
            res.send('profile created')
        })
    }
})}
})

// app.get('/api/v1/signup', async (req, res) => {})
// app.put('/api/v1/signup', async (req, res) => {})
// app.delete('/api/v1/signup', async (req, res) => {})

app.use((req, res, next) => {

    jwt.verify(req.cookies.token, SECRET,
        function (err, decoded) {

            req.body._decoded = decoded;

            console.log("decoded: ", decoded) // bar

            if (!err) {
                next();
            } else {
                res.status(401).send("Un-Authenticated")
            }

        })

});


app.post('/api/v1/logout', (req, res, next) => {
    res.cookie("token", "", {
        httpOnly: true,
        maxAge: 300000
    });
    res.send("logout successfully");
    // console.log()
})

app.post('/api/v1/posts', async (req, res) => {

    console.log(req.body)

    let newPost = await new Post({
        post: req.body.post,
        createdby: req.body.createdby,

    })
    newPost.save(() => {
        console.log("data saved")
        res.send('post created')
    })

})

app.get('/api/v1/posts', (req, res) => {

        Post.find({}, (err, data) => {
    
            if (err) {
                res.status(500).send("error in getting database")
            } else {
                res.send(data)
            }
    
        })

    //  Post.findOne({createdby: req.body._decoded.name}, (err, data) => {

    //     if (err) {
    //         res.status(500).send("error in getting database")
    //     } else {
    //         res.send(data)
    //     }

    // })

    // User.findOne({email: req.body.email}, (err, data) => {
    //     if (err) {
    //         res.status(500).send("error in getting database")
    //     } else {
    //         res.send(data.email)
    //     }
    // })
})

// app.put('/api/v1/posts', async (req, res) => {})
// app.delete('/api/v1/posts', async (req, res) => {})

app.get("/**", (req, res, next) => {
    // res.redirect("/")
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})