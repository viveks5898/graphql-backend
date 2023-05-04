import { Router } from "express";
import { BookController } from "../controller/Bookcontroller.js";
import { bookSearchCOntroller } from "../controller/Bookcontroller.js";
const router = Router();

router.post("/createBook", BookController);
export default router;
