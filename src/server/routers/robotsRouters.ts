import { Router } from "express";
import { getRobots } from "../controllers/robotsControllers.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
