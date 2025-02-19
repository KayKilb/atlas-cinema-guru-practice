// components/WelcomeMessage.tsx
"use client";
import { useSession } from "next-auth/react";

export default function WelcomeMessage() {
  const { data: session } = useSession();

  return <div className={"mr-4"}>Welcome, {session?.user?.email}</div>;
}
