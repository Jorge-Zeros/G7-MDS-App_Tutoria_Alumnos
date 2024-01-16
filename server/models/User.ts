// User.ts
import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    match: /^[a-zA-Z0-9._%+-]+@unsaac\.edu\.pe$/,
    required: true,
    unique: true, // Esto asegura que el email sea único
  },
  rol: {
    type: String,
    enum: ["estudiante", "profesor", "admin"],
    required: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
