"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';

export default function Home() {
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: string, route: string) => {
    setTimeout(() => {
      router.push(route);
    }, 150);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative">
      <div className="absolute left-8 top-8">
        <span className="text-[#606060] text-2xl">
          <span className="font-normal">Dana Gutu |</span>
          <span className="font-light"> Product Designer</span>
        </span>
      </div>
      <div className="flex max-[680px]:flex-col">
        {/* Left div with three sections */}
        <div className="w-[402px] h-[500px] relative max-[872px]:w-[300px] max-[872px]:h-[350px] max-[680px]:w-[300px] max-[680px]:h-[200px]">
          <div 
            className="absolute left-0 top-0 w-[134px] h-[500px] bg-[#733B97] rounded-bl-[77px] flex items-center justify-end cursor-pointer group max-[872px]:w-[100px] max-[872px]:h-[350px] max-[680px]:w-[100px] max-[680px]:h-[200px]"
            onClick={() => router.push('/about')}
          >
            <span className="text-[#FF395C] text-2xl font-normal -rotate-90 whitespace-nowrap -mr-4 group-hover:underline">about</span>
          </div>
          <div 
            className="absolute right-0 top-0 w-[268px] h-[250px] bg-[#84CEF1] rounded-tr-[77px] flex items-center justify-center cursor-pointer group max-[872px]:w-[200px] max-[872px]:h-[175px] max-[680px]:w-[200px] max-[680px]:h-[100px]"
            onClick={() => window.open('/CV_Dana_Gutu.pdf', '_blank')}
          >
            <span className="text-[#2157A4] text-2xl font-normal group-hover:underline">cv</span>
          </div>
          <div 
            className="absolute right-0 bottom-0 w-[268px] h-[250px] bg-[#66BC4D] flex items-center justify-center cursor-pointer group max-[872px]:w-[200px] max-[872px]:h-[175px] max-[680px]:w-[200px] max-[680px]:h-[100px]"
            onClick={() => setIsContactOpen(true)}
          >
            <span className="text-[#FFE31A] text-2xl font-normal group-hover:underline">contact</span>
          </div>
        </div>

        {/* Right div with three columns */}
        <div className="w-[402px] h-[500px] relative max-[872px]:w-[300px] max-[872px]:h-[350px] max-[680px]:w-[300px] max-[680px]:h-[200px]">
          <div 
            className="absolute left-0 top-0 w-[134px] h-[330px] bg-[#2157A4] rounded-[77px] flex items-center group cursor-pointer max-[872px]:w-[100px] max-[872px]:h-[250px] max-[680px]:w-[300px] max-[680px]:h-[67px] max-[680px]:left-0 max-[680px]:top-0 max-[680px]:rounded-tl-[77px] max-[680px]:rounded-br-[77px] max-[680px]:rounded-tr-none max-[680px]:rounded-bl-none"
            onClick={() => handleCaseStudyClick('fidelis', '/case-studies/case-study-1')}
          >
            <span className="text-[#84CEF1] text-2xl font-normal group-hover:hidden flex-1 text-center max-[680px]:hidden">1</span>
            <span className="text-[#84CEF1] text-2xl font-normal hidden group-hover:block absolute right-0 max-[680px]:block max-[680px]:text-center max-[680px]:w-full max-[680px]:absolute-none max-[680px]:group-hover:text-white">fidelis ai</span>
          </div>
          <div 
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[134px] h-[330px] bg-[#FFE31A] rounded-[77px] flex items-center justify-center cursor-pointer group max-[872px]:w-[100px] max-[872px]:h-[250px] max-[680px]:w-[300px] max-[680px]:h-[67px] max-[680px]:left-0 max-[680px]:top-[67px] max-[680px]:-translate-x-0 max-[680px]:rounded-tr-[77px] max-[680px]:rounded-bl-[77px] max-[680px]:rounded-tl-none max-[680px]:rounded-br-none"
            onClick={() => handleCaseStudyClick('marketypes', '/case-studies/case-study-2')}
          >
            <span className="text-[#66BC4D] text-2xl font-normal group-hover:hidden max-[680px]:hidden">2</span>
            <span className="text-[#66BC4D] text-2xl font-normal hidden group-hover:block max-[680px]:block max-[680px]:text-center max-[680px]:w-full max-[680px]:group-hover:text-white max-[872px]:text-lg max-[680px]:text-2xl">marketypes</span>
          </div>
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[134px] h-[330px] bg-[#FF395C] rounded-[77px] flex items-center group cursor-pointer max-[872px]:w-[100px] max-[872px]:h-[250px] max-[680px]:w-[300px] max-[680px]:h-[66px] max-[680px]:left-0 max-[680px]:top-[134px] max-[680px]:-translate-y-0 max-[680px]:rounded-tl-[77px] max-[680px]:rounded-br-[77px] max-[680px]:rounded-tr-none max-[680px]:rounded-bl-none"
            onClick={() => handleCaseStudyClick('nomad', '/case-studies/case-study-3')}
          >
            <span className="text-[#733B97] text-2xl font-normal group-hover:hidden flex-1 text-center max-[680px]:hidden">3</span>
            <span className="text-[#733B97] text-2xl font-normal hidden group-hover:block absolute left-0 max-[680px]:block max-[680px]:text-center max-[680px]:w-full max-[680px]:absolute-none max-[680px]:group-hover:text-white">
              <span className="max-[680px]:hidden">nomad<br />spot</span>
              <span className="hidden max-[680px]:block">nomad spot</span>
            </span>
          </div>
        </div>
      </div>
      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </main>
  );
}
