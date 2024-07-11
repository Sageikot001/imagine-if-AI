import { Schema, model, models } from "mongoose";

interface User {
  email: string;
  firstname: string;
  lastname: string;
  clerkId: string;
  photo: string;
  planId: number;
  creditBalance: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String },
  lastname: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
