"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  // [Tips] useFormStatus で pending でローディング中かどうかを取得できる
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
