import express from "express";
import env from "dotenv";
import apiRoutes from "./api-routes/index.mjs";

const app = express();
env.config();
const port = process.env.PORT || 8080;

app.use(express.json());

// API
app.use(apiRoutes);

app.listen(port, function () {
  console.log(`server start: http://localhost:${port}`);
});
