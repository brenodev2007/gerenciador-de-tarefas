import { app } from "@/app";
import dotenv from "dotenv";
import "dotenv/config";
import { env } from "./utils/env";
dotenv.config();

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
