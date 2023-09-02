
"use client"
import useSignOut from "@/hooks/useSignOut";
import useUser from "@/hooks/useUser";

 function ProtectedPage() {
  const { signOutUser } = useSignOut();
  const user = useUser()



  return (
    <main className="flex min-h-screen justify-center  p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-lg font-bold">Protected page</h1>
        <h2 className="text-gray-500 my-10">
          {user?.data?.email}
        </h2>
        <button className="bg-red-500 p-3 rounded"  onClick={signOutUser}>
          Sign Out
        </button>
      </div>
    </main>
  );
}

export default ProtectedPage
