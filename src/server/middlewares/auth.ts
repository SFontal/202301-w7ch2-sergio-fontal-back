import type { CustomJwtPayload, CustomRequest } from "../types.js";
import type { Response, NextFunction } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import jwt from "jsonwebtoken";

const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const authError = new CustomError(
      "Missing authorization header",
      401,
      "Missing token"
    );

    next(authError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const authError = new CustomError(
      "Missing authorization header",
      401,
      "Missing token"
    );

    next(authError);
    return;
  }

  const token = req.header("Authorization")?.replace(/^Bearer\s*/i, "");

  try {
    const { sub: userId } = jwt.verify(
      token!,
      process.env.JWT_SECRET!
    ) as CustomJwtPayload;

    req.userId = userId;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
