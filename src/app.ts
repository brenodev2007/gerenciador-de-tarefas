import express from "express";
import "express-async-error";

export const app = express();

app.use(express.json());
