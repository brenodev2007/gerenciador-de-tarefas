import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/Config/authConfig";
import { AppError } from "@/utils/AppError";

// Interface do payload do token JWT
interface TokenPayload {
  role: string;
  sub: string; // sub é normalmente o ID do usuário
}

// Estendendo o tipo Request para incluir user
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      role: string;
    };
  }
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token not found", 401);
    }

    const [, token] = authHeader.split(" ");

    const { role, sub: user_id } = verify(
      token,
      authConfig.jwt.secret
    ) as TokenPayload;

    // Salva os dados no request para os próximos middlewares/rotas
    req.user = {
      id: user_id,
      role,
    };

    return next(); // Continua para o próximo middleware ou rota
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}

export { ensureAuthenticated };
