import { Router } from "express";
import { BookController, getBookController } from "../controller/Bookcontroller.js";
const router = Router();

router.post("/createBook", BookController);
router.get("/getBooks", getBookController);

export default router;
