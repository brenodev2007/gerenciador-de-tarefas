import { Router } from "express";
import { UserController } from "@/controllers/UsersController";

export const usersRoutes = Router();

const usersController = new UserController();

usersRoutes.post("/create", usersController.create);
