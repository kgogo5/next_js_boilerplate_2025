"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <Button
      onClick={() => signOut()}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      로그아웃
    </Button>
  ) : (
    <Button
      onClick={() => signIn()}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      로그인
    </Button>
  );
}
