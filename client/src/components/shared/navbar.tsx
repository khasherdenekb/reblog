import { MenuIcon, PackageOpen, UserCog } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NavbarMenu } from "./navbar-menu";
import { ModeToggle } from "../custom/mode-toggle";
import { Button } from "../ui/button";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

const Navbar = async () => {
  const { user, role, organizationId } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="py-4 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-b-muted border-neutral-900 justify-between">
      <Link href="/">
        <aside className="flex items-center">
          <p className="text-3xl font-bold">ReBl</p>
          <PackageOpen className="shadow-sm" />
          <p className="text-3xl font-bold">g</p>
        </aside>
      </Link>
      <aside className="flex items-center gap-4">
        <NavbarMenu />
        <ModeToggle />
        {organizationId === process.env.WORKOS_ADMIN_ORG_ID &&
          role === "admin" &&
          user && (
            <Link
              href="/admin"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Admin
              </span>
            </Link>
          )}

        {user ? (
          <Button
            onClick={async () => {
              "use server";
              await signOut();
            }}
          >
            Sign out
          </Button>
        ) : (
          <div className="flex gap-2">
            <Link href={signInUrl}>
              <Button>Sign in</Button>
            </Link>
            <Link href="/">
              <Button variant={"outline"}>Sign up</Button>
            </Link>
          </div>
        )}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
