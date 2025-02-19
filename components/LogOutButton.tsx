// components/LogOutButton.tsx
"use client";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return (
    <button onClick={() => signOut()}>
      <div className={"flex flex-row items-center"}>
        <ArrowRightEndOnRectangleIcon className={"size-5 mr-1"} />
        <div>Logout</div>
      </div>
    </button>
  );
}
