"use client";

import { useSession } from "next-auth/react";

// [Tips] クライアントサイドでの認証方法
export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)}</div>;
  }

  return <div>From client: user is NOT signed in</div>;
}
