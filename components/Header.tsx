// components/Header.tsx
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import film from "@/assets/film.svg";
import signout from "@/assets/signout.svg";

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="bg-lumi-teal flex justify-between items-center text-lg font-semibold px-6 py-4 text-lumi-navy fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-2">
        <Image src={film} alt="Cinema Guru Logo" width={20} height={15} />
        <span className="font-bold text-2xl">Cinema Guru</span>
      </div>

      {!loading && session && session.user ? (
        <div className="flex items-center gap-4">
          <p className="text-base font-semibold">
            Welcome, {session.user.email}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => signOut()}
              className="flex items-center gap-1"
            >
              <Image src={signout} alt="Logout button" width={15} height={13} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      ) : (
        !loading && (
          <button
            onClick={() => signIn("github")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with GitHub
          </button>
        )
      )}
    </header>
  );
};

export default Header;
