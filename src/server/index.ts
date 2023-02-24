import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/robotsRouters.js";
import userRouter from "./routers/userRouter.js";

export const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/robots", robotsRouter);
app.use("/user", userRouter);
