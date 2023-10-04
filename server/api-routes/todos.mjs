import express from "express";
import { body } from "express-validator";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  patchTodo,
} from "../controllers/apiTodos.mjs";

const router = express.Router();

router.get("/", getAllTodos);

router.get("/:id", getTodo);

router.delete("/:id", deleteTodo);

router.post("/", body("todo").notEmpty(), addTodo);

router.patch("/:id", body("todo").notEmpty(), patchTodo);

export default router;
