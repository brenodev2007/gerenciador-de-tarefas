import { Router } from "express";
import { TeamsController } from "@/controllers/TeamsController";

export const teamsRoutes = Router();

const teamsController = new TeamsController();

teamsRoutes.post("/", teamsController.create);
