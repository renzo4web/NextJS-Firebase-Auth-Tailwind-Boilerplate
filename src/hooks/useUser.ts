import { auth } from "@/lib/firebase-config";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

function useUser() {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Wait for auth to initialize before using it
      await auth.authStateReady();
      const user = auth.currentUser;
      if (user?.uid) {
        // User signed in
        setUser(user);
      }
      setLoading(false);
    })();
  }, []);


  return { data: user, loading}
}

export default useUser
