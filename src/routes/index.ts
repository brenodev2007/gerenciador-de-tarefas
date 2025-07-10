import { Router } from "express";

import { usersRoutes } from "./user-routes";
import { teamsRoutes } from "./teams-routes";
export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/team", teamsRoutes);
