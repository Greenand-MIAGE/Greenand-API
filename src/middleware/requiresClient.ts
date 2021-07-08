//@ts-nocheck
import { Request, Response, NextFunction } from "express";

export function requiresClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.client) {
    return res.status(403).send(`Invalid Session`);
  }

  return next();
}

export default requiresClient;
