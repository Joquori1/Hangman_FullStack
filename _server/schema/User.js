const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
    //    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
     username: {
         type: String,
       // lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
    //  //   match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
         index: true,
     },
     email: {
        type: String,
    //    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'NewModels'
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
