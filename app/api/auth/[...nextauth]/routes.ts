// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Derive the type for our options from NextAuth's parameters
type NextAuthOptionsType = Parameters<typeof NextAuth>[0];

export const authOptions: NextAuthOptionsType = {
  secret: process.env.AUTH_SECRET,
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

// Export both GET and POST handlers for the App Router
export { handler as GET, handler as POST };
