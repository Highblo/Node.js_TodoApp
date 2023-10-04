import { Schema, model } from "mongoose";

const todoSchema = Schema(
  {
    todo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);
export default Todo;
