import { Request, Response } from "express";
import logger from "../utils/logger";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { UserDocument } from "../models/user.model";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = (await createUser(req.body)) as UserDocument;
    return res.send(omit(JSON.parse(JSON.stringify(user)), "password"));
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export function getCurrentUser(req: Request, res: Response) {
  logger.info("getCurrentUser:", res.locals.);
  return res.send(res.locals.user);
}
