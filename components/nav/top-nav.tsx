"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
  const { isSignedIn, user } = useUser();
  return (
    <nav className="flex justify-between items-center p-2 shadow">
      <Link href="/">AI</Link>
      <div className="flex items-center">
        {isSignedIn && (
          <Link
            href="/dashboard"
            className="mr-2"
          >{`${user.fullName}'s Dashboard`}</Link>
        )}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

