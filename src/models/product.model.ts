import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface ProductDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const sessionModel = mongoose.model<ProductDocument>("Session", sessionSchema);

export default sessionModel;
