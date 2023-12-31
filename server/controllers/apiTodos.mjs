import { validationResult } from "express-validator";
import Todo from "../models/todo.mjs";

const getAllTodos = async (req, res) => {
  // dbから全データを取得
  const todos = await Todo.find();
  res.json(todos);
};

const getTodo = async (req, res) => {
  // リクエストのidを取得
  const _id = req.params.id;
  // idに一致するデータを検索
  const todo = await Todo.findById(_id);
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  // リクエストのidを取得
  const _id = req.params.id;
  // idに一致するデータを削除
  await Todo.deleteOne({ _id });
  res.json({ msg: "Delete succeeded" });
};

const addTodo = async (req, res) => {
  // validationエラー処理
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errs = errors.array();
    res.status(400).json(errs);
    return;
  }
  // 送られてきたデータをDBに追加、保存
  const body = new Todo(req.body);
  const newTodos = await body.save();
  res.json(newTodos);
};

const patchTodo = async (req, res) => {
  // validationエラー処理
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errs = errors.array();
    res.status(400).json(errs);
    return;
  }
  const _id = req.params.id;
  const todo = await Todo.findById(_id);
  // 送られてきたデータがundefinedじゃなければ代入
  if (req.body.todo !== undefined) todo.todo = req.body.todo;
  await todo.save();
  res.json(todo);
};

export { getAllTodos, getTodo, deleteTodo, addTodo, patchTodo };
