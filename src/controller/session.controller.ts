import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {
  //    validate the user's password
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send("Invalid email or password");
  //    create a session
  const session = createSession(user._id, req.get("user-agent") || "");
  //    create access token

  //    create refresh token
  //    return access && refresh token
}
