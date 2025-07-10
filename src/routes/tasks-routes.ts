import { Router } from "express";
import { TasksController } from "@/controllers/TaksController";

export const taskRouter = Router();

const taskController = new TasksController();

taskRouter.post("/create", taskController.create);
