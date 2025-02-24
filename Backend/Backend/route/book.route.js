import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

routeret("/", getBook);

export default router;