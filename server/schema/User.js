const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstname: {
        type: String,
    //    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
   lastname: {
        type: String,
      //  match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
     username: {
         type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
    //  //   match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
         index: true,
     },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'User'
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
