import { Router } from "express";
import { TeamsMembersController } from "@/controllers/TeamsMembersController";

export const teamsMembersrouter = Router();
const controller = new TeamsMembersController();

teamsMembersrouter.post("/create", controller.create);
teamsMembersrouter.get("/index", controller.index);
