import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import { omit } from "lodash";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = (await UserModel.create(input)) as UserDocument;
    return omit(JSON.parse(JSON.stringify(user)), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = (await UserModel.findOne({ email })) as UserDocument;
  if (!user) return false;
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;
  return omit(JSON.parse(JSON.stringify(user)), "password");
}
