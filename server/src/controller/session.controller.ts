import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import {
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
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
    // 15 minutes to live
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("accessTokenTtl") }
  );

  //    create refresh token
  const refreshToken = signJwt(
    // 1 year to live
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("refreshTokenTtl") }
  );
  //    return access && refresh token

  res.cookie("accessToken", accessToken, {
    maxAge: 900000, // 15 minutes
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false,
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 3.154e10, // 1 year
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false,
  });

  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await updateSession({ _id: sessionId }, { valid: false });
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
