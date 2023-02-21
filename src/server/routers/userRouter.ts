import { Router } from "express";
import usersControllers from "../controllers/usersControllers.js";

const userRouter = Router();

const userEndpoint = "user";
const userPageEndpoint = "user/login";

userRouter.get(`/${userEndpoint}`, usersControllers);

export default userRouter;
