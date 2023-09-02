import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center p-24">
      <div className="flex flex-col items-center">
       <h1 className="font-bold text-center">Next + Tailwind + Firebase Server Auth</h1>
       <Link className="underline" href={"/auth/login"}>Login</Link>
      </div>
    </main>
  );
}
