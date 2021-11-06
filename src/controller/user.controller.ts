import { Request, Response } from "express";
import logger from "../utils/logger";

export function createUserHandler(req: Request, res: Response) {
  try {
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
