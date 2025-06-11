"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white p-8">
        <span className="text-[#606060] text-2xl">
          <span className="font-normal">Dana Gutu |</span>
          <span className="font-light"> Product Designer</span>
        </span>
      </header>

      {/* Navigation Sections */}
      <div className="w-full">
        {/* About Section */}
        <div 
          className="w-full h-[5vh] bg-white flex items-center px-8 cursor-pointer transition-all duration-300 hover:h-[10vh] hover:bg-[#733B97] group"
          onClick={() => router.push('/about')}
        >
          <span className="text-[#733B97] text-2xl font-normal group-hover:text-white transition-colors duration-300">about</span>
        </div>

        {/* CV Section */}
        <div 
          className="w-full h-[5vh] bg-white flex items-center px-8 cursor-pointer transition-all duration-300 hover:h-[10vh] hover:bg-[#84CEF1] group"
          onClick={() => window.open('/CV_Dana_Gutu.pdf', '_blank')}
        >
          <span className="text-[#84CEF1] text-2xl font-normal group-hover:text-white transition-colors duration-300">cv</span>
        </div>

        {/* Contact Section */}
        <div 
          className="w-full h-[5vh] bg-white flex items-center px-8 cursor-pointer transition-all duration-300 hover:h-[10vh] hover:bg-[#66BC4D] group"
          onClick={() => setIsContactOpen(true)}
        >
          <span className="text-[#66BC4D] text-2xl font-normal group-hover:text-white transition-colors duration-300">contact</span>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="w-full bg-white px-0 md:px-16 lg:px-32 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Fidelis AI Card */}
          <div 
            className="w-full max-w-[400px] bg-white rounded-lg flex flex-col cursor-pointer hover:opacity-90 transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.1)] hover:scale-105"
            onClick={() => router.push('/case-studies/case-study-1')}
          >
            <div className="w-full aspect-[1.7/1] relative">
              <Image
                src="/case-studies/case-study-1/cover.png"
                alt="Fidelis AI Case Study"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <span className="text-[#2157A4] text-2xl font-normal">Fidelis AI</span>
            </div>
          </div>

          {/* Marketypes Card */}
          <div 
            className="w-full max-w-[400px] bg-white rounded-lg flex flex-col cursor-pointer hover:opacity-90 transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.1)] hover:scale-105"
            onClick={() => router.push('/case-studies/case-study-2')}
          >
            <div className="w-full aspect-[1.7/1] relative">
              <Image
                src="/case-studies/case-study-2/cs2-cover.png"
                alt="Marketypes Case Study"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="h-[80px] flex flex-col items-start justify-center px-6">
              <span className="text-[#606060] text-2xl font-light">Marketypes website refresh</span>
              <span className="text-[#606060] text-sm font-light mt-1">Website design</span>
            </div>
          </div>

          {/* Nomad Spot Card */}
          <div 
            className="w-full max-w-[400px] bg-white rounded-lg flex flex-col cursor-pointer hover:opacity-90 transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.1)] hover:scale-105"
            onClick={() => router.push('/case-studies/case-study-3')}
          >
            <div className="w-full aspect-[1.7/1] relative">
              <Image
                src="/case-studies/case-study-3/cover.png"
                alt="Nomad Spot Case Study"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <span className="text-[#FF395C] text-2xl font-normal">Nomad Spot</span>
            </div>
          </div>
        </div>
      </div>

      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </main>
  );
}
