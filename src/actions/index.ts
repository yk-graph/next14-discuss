"use server";

import * as auth from "@/lib/auth";

export async function signIn() {
  return auth.signIn();
}

export async function signOut() {
  return auth.signOut();
}
