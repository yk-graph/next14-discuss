import { auth } from "@/lib/auth";
import { Divider } from "@nextui-org/react";

import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";

export default async function Home() {
  // [Tips] サーバーサイドでの認証方法
  const session = await auth();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-xl m-2">Top Posts</h1>
        </div>
        <div className="border shadow py-3 px-2">
          <TopicCreateForm />
          <Divider className="my-2" />
          <h3 className="text-lg">Topics</h3>
          <TopicList />
        </div>
      </div>

      {/* サーバーサイドでsession情報を取得した場合、下記のように記述して認証済みかどうかを判定できる */}
      {/* {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )} */}
    </div>
  );
}
