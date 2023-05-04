import express from "express";
import mongoose from "mongoose";
import { MONGODB_URL, PORT } from "./src/config/index.js";
import cors from "cors";
import router from "./src/routes/Bookroutes.js";

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use('/api', router)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("connected");
});

app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", `http://localhost:${PORT}`);
});
