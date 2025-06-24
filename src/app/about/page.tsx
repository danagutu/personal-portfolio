"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#733B97] overflow-x-auto">
      <div className="flex h-screen w-full max-[872px]:w-[1750px]">
        {/* Column One */}
        <div className="w-1/3 h-full bg-[#733B97] flex items-center relative flex-shrink-0 max-[872px]:w-[350px]">
          <div 
            className="absolute left-8 top-8 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <span className="text-white font-['Ubuntu'] text-[32px] font-medium leading-normal" style={{ textShadow: '-4px 4px 0px #FF395C' }}>
              {'<<<'} About
            </span>
          </div>
          <span className="text-white font-['Ubuntu'] text-2xl font-light pr-8 ml-auto">Let&apos;s keep it simple:</span>
        </div>

        {/* Column Two */}
        <div className="w-1/3 h-full bg-white flex items-center justify-center flex-shrink-0 max-[872px]:w-[350px]">
          <div className="text-[#733B97] font-['Ubuntu'] text-2xl space-y-4 w-[85%]">
            <p className="font-bold">I have over 1.5 years of software development experience in both startup and corporate settings.</p>
            <p className="font-light">I have worked on both sides of the handoff.</p>
            <p className="font-light">My designs emphasyse clarity - intuitive for users to navigate and easy for developers to build.</p>
          </div>
        </div>

        {/* Column Three */}
        <div className="w-1/3 h-full bg-[#733B97] relative flex-shrink-0 max-[872px]:w-[350px]">
          <div className="w-full h-[60%] bg-[#FF395C] absolute top-0 rounded-br-[77px] flex items-center justify-center">
            <div className="text-white font-['Ubuntu'] text-2xl font-light w-[85%] space-y-4">
              <p>
                My background in economics shaped my <span className="font-bold">optimization mindset</span>.
              </p>
              <p>
                I always look for ways to streamline: from reducing user friction
                to aligning product goals.
              </p>
            </div>
          </div>
          <div className="w-full h-[40%] bg-[#733B97] absolute bottom-0 flex items-center justify-center">
            <div className="text-white font-['Ubuntu'] text-2xl font-light w-[85%] text-center">
              My passion? Applying behavioral psychology to create experiences that just <span 
                className="underline cursor-pointer"
                onClick={() => router.push('/joke')}
              >click</span>.
            </div>
          </div>
        </div>

        {/* Column Four */}
        <div className="w-1/3 h-full bg-[#733B97] flex items-center justify-center flex-shrink-0 max-[872px]:w-[350px]">
          <span className="text-white font-['Ubuntu'] text-2xl font-light">This is me :) {'>>>'}</span>
        </div>

        {/* Column Five */}
        <div className="w-1/3 h-full bg-white flex items-center justify-center flex-shrink-0 max-[872px]:w-[350px]">
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/profile-picture.png"
              alt="Dana Gutu"
              width={280}
              height={400}
              style={{ borderRadius: '20px' }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
} 