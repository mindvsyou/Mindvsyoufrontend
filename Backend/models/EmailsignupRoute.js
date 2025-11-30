import mongoose from "mongoose";

const EmailSchema = mongoose.Schema({
    email: {
           type: String,
           required: true
        },
  
},
        {
           timestamps: true
        }
)
export const Email = mongoose.model('Email', EmailSchema);