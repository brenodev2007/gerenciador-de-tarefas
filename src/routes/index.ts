import { Router } from "express";

import { usersRoutes } from "./user-routes";
import { teamsRoutes } from "./teams-routes";
import { teamsMembersrouter } from "./teams-members";
export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/teams", teamsRoutes);
routes.use("/teams-member", teamsMembersrouter);
