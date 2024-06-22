import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
export const authConfig: NextAuthOptions = {
  providers: [Github],
};
