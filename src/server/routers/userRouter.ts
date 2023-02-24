import { Router } from "express";
import { loginUser, createUser } from "../controllers/usersControllers.js";
import multer from "multer";

const userRouter = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    const splitedFileName = file.originalname.split(".");
    callback(
      null,
      `${splitedFileName[0]}${Date.now()}-${(Math.random() * 9999).toFixed(
        0
      )}.${splitedFileName[1]}`
    );
  },
});
const upload = multer({ storage });

userRouter.post("/login", loginUser);
userRouter.post("/register", upload.single("image"), createUser);

export default userRouter;
