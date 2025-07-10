import { Request, Response, NextFunction } from "express";
import { prisma } from "@/databases/prisma";

import { z } from "zod";
import { AppError } from "@/utils/AppError";

export class TasksController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        title: z.string().min(1).max(50),
        description: z.string().min(1).max(200),
        status: z.enum(["pending", "in_progress", "completed"]), // ✅ Enum validado aqui
        teamId: z.string().uuid(),
        assignedTo: z.string().cuid(),
      });

      const { title, description, status, teamId, assignedTo } =
        bodySchema.parse(req.body);

      const team = await prisma.teams.findUnique({ where: { id: teamId } });

      if (!team) {
        throw new AppError("Time não encontrado.");
      }

      const task = await prisma.task.create({
        data: {
          title,
          description,
          status: status,
          teamId,
          assignedTo,
        },
      });

      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  };
}
