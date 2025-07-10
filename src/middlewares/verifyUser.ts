import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors, sign } from "jsonwebtoken";
import jwtConfig, { authConfig } from "@/JWT/jwtConfig";
import { freeAccess } from "@/utils/freeAccess";
import { AppError } from "@/utils/AppError";

export const verifyUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (freeAccess(req.path)) {
    next();
    return;
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Não possui token", 401);
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    throw new AppError("Token mal formado", 401);
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    res.status(401).json({ message: "Token mal formado" });
    return;
  }

  jwt.verify(
    token,
    authConfig.secret,
    (err: VerifyErrors | null, decoded: any): void => {
      if (err) {
        res.status(401).json({ message: "Token inválido" });
        return;
      }

      req.headers = decoded;
      console.log(decoded);

      next();
    }
  );
};
