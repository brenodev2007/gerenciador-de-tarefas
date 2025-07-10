import express from "express";
import "express-async-error";
import { verifyUser } from "./middlewares/verifyUser";
import { routes } from "./routes";

export const app = express();
app.use(verifyUser);
app.use(express.json());
app.use(routes);
