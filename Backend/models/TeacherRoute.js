import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   role: {
    type: String,
    default: "teacher",
  },

});

export default mongoose.model("Teacher", teacherSchema);
