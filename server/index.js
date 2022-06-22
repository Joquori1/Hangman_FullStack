//const http = require('http');
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const mongoose = require('mongoose');
const UserModel = require('./schema/User');
const registrationRoutes = require('./route');


require("dotenv").config({ path: "./config.env"});

const app = express();
//middleware
app.use( express.static( "public" ) );
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("./schema/User", registrationRoutes);


mongoose.connect('mongodb+srv://hangman:hangman1@cluster0-hgmn.qikzqqo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;



app.get("/", (req, res) => {
  res.render("route");
});

app.get("/register", (req, res) => {
    res.render("register");
  });


  app.get("/login", async (req, res) => {

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

app.post("/signup", async (req, res) => {
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


app.post("/login", async (req, res) => {
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



app.listen(port, () => {
    console.log(`SERVER RUNNING SUCCESSFULLY! @ ${port}`);
});

