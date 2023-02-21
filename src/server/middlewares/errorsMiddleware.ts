import type { NextFunction, Request, Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const notFoundError = new CustomError(
    "Not found",
    404,
    "Sorry, robot not found"
  );

  next(notFoundError);
};

export const commonError = (
  { statusCode, publicMessage }: CustomError,
  req: Request,
  res: Response
) => {
  res
    .status(statusCode || 500)
    .json({ error: publicMessage || "Endpoint not found" });
};
