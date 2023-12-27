"use server";

import * as auth from "@/lib/auth";

export async function signIn() {
  return auth.signIn("github");
}
