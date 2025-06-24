"use client";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

interface ContactPopupProps {
  onClose: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/dana-gutu', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/danagutu', '_blank');
  };

  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen bg-[#66BC4D] p-0 max-[680px]:top-1/2 max-[680px]:right-0 max-[680px]:w-full max-[680px]:h-1/2">
      <button 
        onClick={onClose}
        className="absolute top-8 left-8 text-[#FFE31A] hover:text-white transition-colors duration-200 max-[680px]:top-4 max-[680px]:right-4 max-[680px]:left-auto"
      >
        <IoClose size={32} className="max-[680px]:w-6 max-[680px]:h-6 max-[872px]:w-8 max-[872px]:h-8" />
      </button>
      <div className="absolute bottom-[40%] left-8 flex items-center gap-4 max-[680px]:bottom-[65%] max-[680px]:left-8">
        <MdEmail className="text-[#FFE31A] w-10 h-10 max-[680px]:w-6 max-[680px]:h-6 max-[872px]:w-8 max-[872px]:h-8" />
        <span className="text-[#FFE31A] text-2xl font-normal font-ubuntu max-[680px]:text-lg max-[872px]:text-xl">
          danagutu2002@gmail.com
        </span>
      </div>
      <div 
        className="absolute bottom-[30%] left-8 flex items-center gap-4 group cursor-pointer max-[680px]:bottom-[52%] max-[680px]:left-8"
        onClick={handleLinkedInClick}
      >
        <FaLinkedin 
          className="text-[#FFE31A] w-10 h-10 group-hover:text-white transition-colors max-[680px]:w-6 max-[680px]:h-6 max-[872px]:w-8 max-[872px]:h-8" 
        />
        <span 
          className="text-[#FFE31A] text-2xl font-normal font-ubuntu group-hover:text-white transition-colors max-[680px]:text-lg max-[872px]:text-xl"
        >
          www.linkedin.com/in/dana-gutu
        </span>
      </div>
      <div 
        className="absolute bottom-[20%] left-8 flex items-center gap-4 group cursor-pointer max-[680px]:bottom-[39%] max-[680px]:left-8"
        onClick={handleGithubClick}
      >
        <FaGithub 
          className="text-[#FFE31A] w-10 h-10 group-hover:text-white transition-colors max-[680px]:w-6 max-[680px]:h-6 max-[872px]:w-8 max-[872px]:h-8" 
        />
        <span 
          className="text-[#FFE31A] text-2xl font-normal font-ubuntu group-hover:text-white transition-colors max-[680px]:text-lg max-[872px]:text-xl"
        >
          github.com/danagutu
        </span>
      </div>
    </div>
  );
} 