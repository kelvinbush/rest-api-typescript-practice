import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    return await createUser(req.body);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
