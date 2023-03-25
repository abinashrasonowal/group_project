const express = require("express")
const path = require("path")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./useerSchema.js')
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'secretkey'

const port = 5000

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, "./app/build")));
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Users').then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/app/build/index.html'))
})

// app.get('/profile',verifydetails, (req, res) => {
    
// })

// function verifydetails(req,res,next){
//     const bearearHeader = req.headers['authorization']

//     if(typeof bearearHeader !== "undefined"){
//         const berer = bearearHeader.split(" ")
//         const token =
//     }
// }

app.post('/login', async (req, res) => {
    
    const { email: username, password } = req.body

    const user = await User.findOne({ username }).lean()
    // console.log(user)
    if (!user) {
        return res.json({ status: 'invalid', error: 'Invalid username/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        // the username, password combination is successful
        // const token = jwt.sign(
        //     {
        //         id: user._id,
        //         username: user.username
        //     },
        //     SECRET_KEY
        // )
        const userdetails = {
            email :user.username
        }
        return res.json({ status: 'ok', data: userdetails })
    }
    res.json({ status: 'invalid', error: 'Invalid username/password' })
})

app.post('/register', async (req, res) => {
    const { email: username, password: plainTextPassword } = req.body

    const user = await User.findOne({ username }).lean()

    if (user) {
        return res.json({ status: 'present', error: 'Invalid username/password' })
    }
    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if (plainTextPassword.length < 8) {
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atleast 8 characters'
        })
    }
    const password = await bcrypt.hash(plainTextPassword, 10);
    try {
        const res = await User.create({
            username, password
        })
        //console.log(res);
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already exits' })
        }
        throw error
    }
    res.json({ status: 'ok' });
})

app.listen(port, () => {
    console.log("server is listining on port:" + port)
})
