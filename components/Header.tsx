// components/Header.tsx
import Logo from "./Logo";
import LogOutButton from "./LogOutButton";
import WelcomeMessage from "./WelcomeMessage";

export default async function Header() {
  return (
    <div
      className={"bg-teal text-navy flex flex-row justify-between align-center"}
    >
      <Logo />
      <div className={"flex flex-row p-4 items-center"}>
        <WelcomeMessage />
        <LogOutButton />
      </div>
    </div>
  );
}
