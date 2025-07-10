import { Request, Response, NextFunction } from "express";
import { prisma } from "@/databases/prisma";
import { hash } from "bcrypt";
import { z } from "zod";

export class TeamsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    const bodySchema = z.object({
      name: z.string().min(3).max(50),
      description: z.string().min(10).max(200),
    });

    const { name, description } = bodySchema.parse(req.body);

    const teams = await prisma.teams.create({
      data: {
        name,
        description,
      },
    });
  };
}
