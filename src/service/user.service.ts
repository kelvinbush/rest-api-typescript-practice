import { DocumentDefinition, FilterQuery } from "mongoose";
import UserModel, { UserDocument, UserInput } from "../models/user.model";
import { omit } from "lodash";

export async function createUser(input: UserInput) {
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

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
