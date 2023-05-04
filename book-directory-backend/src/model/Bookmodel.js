import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BookSchema = new Schema({
  name: { type: String },
  author: { type: String },
  price: { type: String },
});
const Book = model("Book", BookSchema);
export default Book;

