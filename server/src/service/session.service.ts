import SessionModel, { SessionDocument } from "../models/session.model";
import { FilterQuery, UpdateQuery } from "mongoose";
import { get } from "lodash";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { UserDocument } from "../models/user.model";
import { findUser } from "./user.service";
import config from "config";

export async function createSession(userId: string, userAgent: string) {
  const session: SessionDocument = await SessionModel.create({
    user: userId,
    userAgent,
  });
  return JSON.parse(JSON.stringify(session));
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean();
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);
  if (!decoded || !get(decoded, "_id")) return false;
  const session = (await SessionModel.findById(
    get(decoded, "session")
  )) as SessionDocument;
  if (!session || !session.valid) return false;
  const user = (await findUser({ _id: session.user })) as UserDocument;
  if (!user) return false;
  return signJwt(
    // 15 minutes to live
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("accessTokenTtl") }
  );
}
