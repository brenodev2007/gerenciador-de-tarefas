import jwt from "jsonwebtoken";

export const authConfig = {
  secret: "secreto",
  expiresIn: 365,
};

const createTokenJwt = (params: string | object): string =>
  jwt.sign(params, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });

export default createTokenJwt;
