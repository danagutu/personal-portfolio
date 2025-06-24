"use client";

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export default function CaseStudyOne() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#2157A4] text-[#84CEF1] p-8">
      {/* Close button */}
      <button 
        onClick={() => router.push('/')}
        className="text-[#84CEF1] text-4xl mb-8 hover:text-white transition-opacity"
      >
        <IoArrowBack size={32} />
      </button>
      <div className="h-screen flex items-center justify-center -mt-32">
        <div className="text-center">
          <p className="text-2xl font-ubuntu mb-4">
            Fidelis AI case study incoming.
          </p>
          <p className="text-2xl font-ubuntu">
            In the meantime, check out the{' '}
            <span 
              className="underline cursor-pointer hover:text-white transition-colors"
              onClick={() => router.push('/case-studies/case-study-2')}
            >
              Marketypes case study
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
} 