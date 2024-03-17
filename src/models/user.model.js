import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname1: {
        type: String,
        required: true
    },
    lastname2: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    animals_adopted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet' 
    }],
    permission: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("User", userSchema);
