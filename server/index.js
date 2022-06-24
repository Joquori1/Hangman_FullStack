const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const UserModel = require('./schema/User');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));


  app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
  
  app.get("/login", (req, res) => {
      res.render("login");
    });
  


//routes routes

app.post("/register", async (req, res) => {
    const user = req.body;  
    const newUser = new UserModel(user);
    await newUser.save();
  
  
    res.json(user);
});

module.exports = app