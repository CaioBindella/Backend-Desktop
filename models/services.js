const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    passaword: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
},
{ timestamps: true });

const UserData = mongoose.model("Service", UserSchema);

module.exports = {
    UserData,
    UserSchema,
};