const express = require("express")
const path = require("path")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('./useerSchema.js')
const SECRET_KEY ='secretkey'


const port = 5000

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Users').then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err)
})
 
app.post('/login', async (req, res) => {
    const { email: username, password } = req.body

    const user = await User.findOne({ username }).lean()

    if (!user) {
        return res.json({ status: 'invalid', error: 'Invalid username/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        // the username, password combination is successful
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
          SECRET_KEY
        )
        return res.json({ status: 'ok', data: token })
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
})

// import Register from "./app/src/components/Register.js"
// const Register= require('./app/src/components/Register.js')

//register
app.get('/register', (req, res) => {
    res.json("hellow")
    // res.render('register', { title: 'Register' });
})
  
app.post('/register', async (req, res) => {
    const {email :username, password :plainTextPassword}= req.body
    // console.log('email is '+email +" "+password)
    // res.json('your email is '+email +' '+password)
    // const { username, password: plainTextPassword } = req.body;
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
