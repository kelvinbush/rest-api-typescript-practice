import { object, string } from "zod";

export const createSessionSchema = object({
  body: object({
    email: string(),
    password: string(),
  }),
});
