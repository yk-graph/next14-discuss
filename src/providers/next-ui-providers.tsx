/*
  [Tips] NextUIProvider をアプリケーション全体で使用できるようにする方法 -> Providerでラップする
*/

"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export default function NextUIProviders({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
