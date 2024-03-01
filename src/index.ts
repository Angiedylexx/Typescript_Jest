import express from "express";
import cors from "cors";
import { port } from "./config/index";
import { serverRead } from "./api/controllers/get";
import moviesRouter from "./api/routers/routers";

export const app = express(); 

app.use(express.json()) // transformar de res a json

app.use(cors());
app.get("/", serverRead);
app.use("/api/v1", moviesRouter);

export const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});