import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <p className="text-2xl font-bold">Hey, hello! This is the page after sign-up / sign-in</p>
      </div>

    </div>
    <div className="absolute top-4 right-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  </>
  );
}
