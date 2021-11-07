import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { UserDocument } from "../models/user.model";
import { signJwt } from "../utils/jwt.utils";
import config from "config";
import { SessionDocument } from "../models/session.model";

export async function createUserSessionHandler(req: Request, res: Response) {
  //    validate the user's password
  const user = (await validatePassword(req.body)) as UserDocument;
  if (!user) return res.status(401).send("Invalid email or password");
  //    create a session
  const session = await createSession(user._id, req.get("user-agent") || "");
  //    create access token
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("accessTokenTtl") }
  );
  //    create refresh token
  //    return access && refresh token
}
