import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  if (!user) {
    logger.info("User not found in locals");
    return res.sendStatus(403);
  }

  return next();
};

export default requireUser;
