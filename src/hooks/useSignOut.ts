import { auth } from "@/lib/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function useSignOut({ routeRedirect = "/auth/login" } = {}) {
  const router = useRouter();

  const signOutUser = async () => {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch("/api/auth/signout", {
      method: "POST",
    });

    if (response.status === 200) {
      router.push(routeRedirect);
    }
  };

  return { signOutUser };
}

export default useSignOut;
