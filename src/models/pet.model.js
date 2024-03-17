import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        animal: { 
            type: String, 
            enum: ['dog', 'cat', 'bird', 'other'], 
            required: true 
        },
        city: { 
            type: String, 
            required: true 
        },
        state: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String,
            required: true
        },
        medications: [
            { 
                type: String 
            }
        ],
        images: [
            { 
                type: String 
            }
        ]
    }
    , {timestamps: true}
);

export default mongoose.model('Pet', petSchema);