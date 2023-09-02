"use client";

import { useEffect} from "react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/lib/firebase-config";
import Link from "next/link";
import useUser from "@/hooks/useUser";

export default function SignIn() {
  const router = useRouter();
  const user = useUser()

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/protected");
        }
      });
    });
  }, [router]);

  function signIn() {
    signInWithRedirect(auth, provider);
  }

  return (
    <main className="flex min-h-screen justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-lg font-bold mb-5">Auth</h1>
        {
          user?.data?.uid ? 
        <h2  className="text-gray-500 my-10">User is logged in</h2> :
        <button className="bg-orange-400 rounded p-2" onClick={signIn}>
          Sign In
        </button>
        }
        <Link className="underline mt-5" href="/protected">Go to Protected page</Link>
      </div>
    </main>
  );
}
