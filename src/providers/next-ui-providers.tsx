/*
  [Tips] NextUIProvider をアプリケーション全体で使用できるようにする方法 -> Providerでラップする
*/

"use client";

import { NextUIProvider as Provider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export default function NextUIProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}
