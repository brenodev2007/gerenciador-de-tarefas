import { Router } from "express";
import { TasksController } from "@/controllers/TaksController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUser } from "@/middlewares/verifyUser";

export const taskRouter = Router();

const taskController = new TasksController();

taskRouter.post(
  "/create",
  ensureAuthenticated,
  verifyUser(["admin"]),
  taskController.create
);
taskRouter.get(
  "/index",
  ensureAuthenticated,
  verifyUser(["admin"]),
  taskController.index
);
taskRouter.get(
  "/show/:id",
  ensureAuthenticated,
  verifyUser(["admin"]),
  taskController.show
);
