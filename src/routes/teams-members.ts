import { Router } from "express";
import { TeamsMembersController } from "@/controllers/TeamsMembersController";

export const teamsMembersrouter = Router();
const controller = new TeamsMembersController();

teamsMembersrouter.post("/", controller.create);
teamsMembersrouter.get("/", controller.index);
