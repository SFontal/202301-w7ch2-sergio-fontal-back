import type { Request, Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (req: Request, res: Response) => {
  try {
    const robots = await Robot.find({});
    console.log(robots);

    res.status(200).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      error.message as string,
      500,
      "Couldn't retrieve robots"
    );
    throw customError;
  }
};
