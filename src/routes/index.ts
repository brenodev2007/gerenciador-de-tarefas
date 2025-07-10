import { Router } from "express";

import { usersRoutes } from "./user-routes";
import { teamsRoutes } from "./teams-routes";
import { teamsMembersrouter } from "./teams-members-routes";
import { taskRouter } from "./tasks-routes";
export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/teams", teamsRoutes);
routes.use("/teams-members", teamsMembersrouter);
routes.use("/tasks", taskRouter);
