import express from 'express';
import Todo from '../models/todo.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  // dbから全データを取得
  const todos = await Todo.find();
  res.json(todos);
});

export default router;