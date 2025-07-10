import { env } from "../utils/env";

export const authConfig = {
  jwt: {
    secret: env.SECRET,
    expiresIn: "1d" as const, // <-- força ser string literal
  },
};
