import { type Request } from "express";
import { type JwtPayload } from "jsonwebtoken";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface CustomRequest extends Request {
  userId: string;
}

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
}
