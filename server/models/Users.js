const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    quote: { type: String},
},
  //  {collection: 'user-data'}  //name of collection in mongo database
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;