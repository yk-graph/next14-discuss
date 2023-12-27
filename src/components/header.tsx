/*
  [Tips] サーバーコンポーネントで実装する
  1. 認証情報は NextAuth の auth メソッドを利用して取得する（getServerSession メソッドでも同様の処理ができるため、そっちのほうがポピュラーかも）
  2. 認証情報があるかどうかを判定して、あればユーザー情報を表示・なければサインインボタンを表示する
  3. 予め authContent という変数を用意して、2で判定した結果に応じて JSX を代入する
*/

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { auth } from "@/lib/auth";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session.user.image || ""} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
