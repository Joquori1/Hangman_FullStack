//require('dotenv').config();


//const http = require('http');
const express = require("express");
const app = express();

const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const cors = require('cors');

//middleware

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://jay123:password1234@cluster0.1mrtbcu.mongodb.net/hangman?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


app.post("/api/register", async (req, res) => {
    const user = req.body;  
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10) //cycle iterations and hash algorithms for passcodes
        await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.send(user);
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
    const newUser = new UserModel(user);
    await newUser.save();

  //  res.json(user);
});


app.post("/api/login", async (req, res) => {
    const user = await UserModel.findOne({
            email: req.body.email,    
        })


if(!user) { 
    return { status: 'error', error: 'Invalid Password'}
 }

        const isPasswordValid = await bcrypt.compare(
            req.body.password, 
            user.password
            )
      
        if (isPasswordValid) {

            const token = jwt.sign({             //jsonwebtoken
                name: user.name,
                email: user.email,
            }, 
            'secret123'
            )

            return res.json({ status: 'good', user: token })
        } else {
            return res.json({ status: 'error', user: false})
        }

    const newUser = new UserModel(user);
    await newUser.save();

  //  res.json(user);
});


app.get("/userLogin", async (req, res) => {

const token = req.headers['x-access-token']


try {
const decoded = jwt.verify(token, 'secret123')
const email = decoded.email
const user = await User.findOne({ email: email })

return res.json ({ status: 'ok', quote: user.quote})
} catch(error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token'})
}

});


app.post("/api/quote", async (req, res) => {

    const token = req.headers['x-access-token']
    
    
    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    const user = await User.updateOne({ email: email }, { $set: {quote: req.body.quote } })
    
    return res.json ({ status: 'ok'})
    } catch(error) {
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
    
    });
    


app.listen(3001, () => {
    console.log('SERVER RUNNING SUCCESSFULLY!');
});