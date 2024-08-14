import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // userResponse: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'response'
    // }],
    // question: {
    //     type: String,
    // },
    // isVerified: {
    //     type: Boolean,
    //     default: false,
    // },
    // userAnswer: [{
    //     type: String
    // }],
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;