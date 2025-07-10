import { Request, Response, NextFunction } from "express";
import { prisma } from "@/databases/prisma";
import { hash } from "bcrypt";
import { z } from "zod";

export class UserController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        name: z.string().min(3).max(50),
        email: z.string(),
        password: z.string().min(8).max(50),
        role: z.enum(["admin", "member"]),
      });

      const { name, email, password, role } = bodySchema.parse(req.body);

      const hashedPassword = await hash(password, 8);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      res.json({ user });
    } catch (error) {
      next(error);
    }
  };
}
