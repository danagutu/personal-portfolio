"use client";

import { useRouter } from 'next/navigation';

export default function Joke() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#733B97] flex items-center justify-center">
      <div className="text-white font-['Ubuntu'] text-2xl font-light text-center space-y-4">
        <p>Lol, gotcha! 😂</p>
        <p>
          <span 
            className="underline cursor-pointer"
            onClick={() => router.push('/about')}
          >
            Go back
          </span>
          , you fell into my trap.
        </p>
      </div>
    </main>
  );
} 