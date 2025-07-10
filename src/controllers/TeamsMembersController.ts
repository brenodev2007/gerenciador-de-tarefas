import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/databases/prisma";
import { AppError } from "@/utils/AppError";

export class TeamsMembersController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        userId: z.string(),
        teamId: z.string(),
      });

      const { userId, teamId } = bodySchema.parse(req.body);

      // Verifica se o user e o team existem
      const userExists = await prisma.user.findUnique({
        where: { id: userId },
      });
      const teamExists = await prisma.teams.findUnique({
        where: { id: teamId },
      });

      if (!userExists || !teamExists) {
        throw new AppError("User ou Team não encontrados");
      }

      const member = await prisma.teamMembers.create({
        data: {
          userId,
          teamId,
        },
      });

      res.status(201).json(member);
    } catch (error) {
      next(error);
    }
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const members = await prisma.teamMembers.findMany({
        include: {
          user: true,
          team: true,
        },
      });

      res.json(members);
    } catch (error) {
      next(error);
    }
  };
}
