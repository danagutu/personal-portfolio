"use client";

import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface ContactPopupProps {
  onClose: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/dana-gutu', '_blank');
  };

  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen bg-[#66BC4D] p-0">
      <button 
        onClick={onClose}
        className="absolute top-8 left-8 text-[#FFE31A] text-2xl font-normal"
      >
        X
      </button>
      <div className="absolute bottom-[40%] left-8 flex items-center gap-4">
        <MdEmail className="text-[#FFE31A] w-10 h-10" />
        <span className="text-[#FFE31A] text-2xl font-normal font-ubuntu">
          danagutu2002@gmail.com
        </span>
      </div>
      <div 
        className="absolute bottom-[30%] left-8 flex items-center gap-4 group cursor-pointer"
        onClick={handleLinkedInClick}
      >
        <FaLinkedin 
          className="text-[#FFE31A] w-10 h-10 group-hover:text-white transition-colors" 
        />
        <span 
          className="text-[#FFE31A] text-2xl font-normal font-ubuntu group-hover:text-white transition-colors"
        >
          www.linkedin.com/in/dana-gutu
        </span>
      </div>
      <div className="absolute bottom-8 left-8">
        <span className="text-[#FFE31A] text-2xl font-normal font-ubuntu">
          others? incoming.
        </span>
      </div>
    </div>
  );
} 