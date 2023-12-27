/*
  [Tips] パターン1 サーバーコンポーネントで認証の判定を実装する
  1. 認証情報は NextAuth の auth メソッドを利用して取得する（getServerSession メソッドでも同様の処理ができるため、そっちのほうがポピュラーかも）
  2. 認証情報があるかどうかを判定して、あればユーザー情報を表示・なければサインインボタンを表示する
  3. 予め authContent という変数を用意して、2で判定した結果に応じて JSX を代入する
  ※ このパターンはサーバーサイドで認証情報を取得するため、ページ全体が DynamicPage としてレンダリングされる -> StaticPage としてレンダリングさせたい場合はパターン2を参照
*/
/*
  [Tips] パターン2 クライアントコンポーネントで認証の判定を実装する
  1. HeaderAuth というクライアントコンポーネントを作成して、このコンポーネントで表示する
  2. HeaderAuthコンポーネントでは、クライアントコンポーネントで使用できる useSession フックを利用して認証情報を取得する
*/

/* パターン1 */
// import Link from "next/link";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Input,
//   Button,
//   Avatar,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@nextui-org/react";
// import { auth } from "@/lib/auth";
// import * as actions from "@/actions";

// export default async function Header() {
//   const session = await auth();

//   let authContent: React.ReactNode;

//   if (session?.user) {
//     authContent = (
//       <Popover placement="left">
//         <PopoverTrigger>
//           <Avatar src={session.user.image || ""} />
//         </PopoverTrigger>
//         <PopoverContent>
//           <div className="p-4">
//             <form action={actions.signOut}>
//               <Button type="submit">Sign Out</Button>
//             </form>
//           </div>
//         </PopoverContent>
//       </Popover>
//     );
//   } else {
//     authContent = (
//       <>
//         <NavbarItem>
//           <form action={actions.signIn}>
//             <Button type="submit" color="secondary" variant="bordered">
//               Sign In
//             </Button>
//           </form>
//         </NavbarItem>

//         <NavbarItem>
//           <form action={actions.signIn}>
//             <Button type="submit" color="primary" variant="flat">
//               Sign Up
//             </Button>
//           </form>
//         </NavbarItem>
//       </>
//     );
//   }

//   return (
//     <Navbar className="shadow mb-6">
//       <NavbarBrand>
//         <Link href="/" className="font-bold">
//           Discuss
//         </Link>
//       </NavbarBrand>
//       <NavbarContent justify="center">
//         <NavbarItem>
//           <Input />
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">{authContent}</NavbarContent>
//     </Navbar>
//   );
// }

/* パターン2 */
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";

export default function Header() {
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

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
