import SessionModel, { SessionDocument } from "../models/session.model";
import { FilterQuery, UpdateQuery } from "mongoose";
import { omit } from "lodash";
import { Session } from "inspector";

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
