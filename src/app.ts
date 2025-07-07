import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/user/user.controller";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is Running Successfully" });
});

export default app;
