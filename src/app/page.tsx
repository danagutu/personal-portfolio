"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';

export default function Home() {
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative">
      <div className="absolute left-8 top-8">
        <span className="text-[#606060] text-2xl">
          <span className="font-normal">Dana Gutu |</span>
          <span className="font-light"> Product Designer</span>
        </span>
      </div>
      <div className="flex">
        {/* Left div with three sections */}
        <div className="w-[402px] h-[500px] relative">
          <div 
            className="absolute left-0 top-0 w-[134px] h-[500px] bg-[#733B97] rounded-bl-[77px] flex items-center justify-end cursor-pointer group"
            onClick={() => router.push('/about')}
          >
            <span className="text-[#FF395C] text-2xl font-normal -rotate-90 whitespace-nowrap -mr-4 group-hover:underline">about</span>
          </div>
          <div 
            className="absolute right-0 top-0 w-[268px] h-[250px] bg-[#84CEF1] rounded-tr-[77px] flex items-center justify-center cursor-pointer group"
            onClick={() => window.open('/CV_Dana_Gutu.pdf', '_blank')}
          >
            <span className="text-[#2157A4] text-2xl font-normal group-hover:underline">cv</span>
          </div>
          <div 
            className="absolute right-0 bottom-0 w-[268px] h-[250px] bg-[#66BC4D] flex items-center justify-center cursor-pointer group"
            onClick={() => setIsContactOpen(true)}
          >
            <span className="text-[#FFE31A] text-2xl font-normal group-hover:underline">contact</span>
          </div>
        </div>

        {/* Right div with three columns */}
        <div className="w-[402px] h-[500px] relative">
          <div 
            className="absolute left-0 top-0 w-[134px] h-[330px] bg-[#2157A4] rounded-[77px] flex items-center group cursor-pointer"
            onClick={() => router.push('/case-studies/case-study-1')}
          >
            <span className="text-[#84CEF1] text-2xl font-normal group-hover:hidden flex-1 text-center">1</span>
            <span className="text-[#84CEF1] text-2xl font-normal hidden group-hover:block absolute right-0">fidelis ai</span>
          </div>
          <div 
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[134px] h-[330px] bg-[#FFE31A] rounded-[77px] flex items-center justify-center cursor-pointer group"
            onClick={() => router.push('/case-studies/case-study-2')}
          >
            <span className="text-[#66BC4D] text-2xl font-normal group-hover:hidden">2</span>
            <span className="text-[#66BC4D] text-2xl font-normal hidden group-hover:block">marketypes</span>
          </div>
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[134px] h-[330px] bg-[#FF395C] rounded-[77px] flex items-center group cursor-pointer"
            onClick={() => router.push('/case-studies/case-study-3')}
          >
            <span className="text-[#733B97] text-2xl font-normal group-hover:hidden flex-1 text-center">3</span>
            <span className="text-[#733B97] text-2xl font-normal hidden group-hover:block absolute left-0">
              nomad<br />spot
            </span>
          </div>
        </div>
      </div>
      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </main>
  );
}
