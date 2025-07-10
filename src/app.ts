import express from "express";
import "express-async-error";
import { errorHandling } from "./middlewares/userHandling";

import { routes } from "./routes";

export const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandling);
