import express from "express";
import env from "dotenv";
import './helpers/db.mjs';
import apiRoutes from "./api-routes/index.mjs";

const app = express();

// .envファイル参照
env.config();
const port = process.env.PORT || 8080;

// JSONデータのパース（解析）を有効化
app.use(express.json());

// API
app.use(apiRoutes);

// サーバー立ち上げ
app.listen(port, function () {
  console.log(`server start: http://localhost:${port}`);
});
