/*
  [Tips] NextAuthを使った認証の実装
  ※ --save-exact を使って npm install のバージョンを指定してinstall -> npm install --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

  1. NextAuthのインストール
    $ npm install --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3
  2. NextAuthのAPIの設置
    app/api/auth/[...nextauth]/route.ts にNextAuthのAPIのハンドラーを設置
  3. NextAuthの設定
    このファイルがそれに該当 NextAuthでの具体的な処理内容を記述する
  4. NextAuthの関数を server action に切り出して定義する
　　 app/actions/index.ts に signIn, signOut を定義
*/

import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing github oauth credentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Usually not needed, here we are fixing a bug in nextauth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
