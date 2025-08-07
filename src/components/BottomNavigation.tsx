import React, { useState } from 'react';

export const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'about'>('home');

  return (
    <nav className="flex justify-center items-center self-stretch relative bg-[#F3EDF7]">
      <button
        className={`flex flex-col items-center gap-1 flex-[1_0_0] self-stretch relative px-0 py-1.5 transition-colors ${
          activeTab === 'home' ? 'text-[#6750A4]' : 'text-[#49454F]'
        }`}
        onClick={() => setActiveTab('home')}
        aria-label="Home"
      >
        <div className="flex justify-center items-center relative rounded-2xl">
          <div className="flex w-14 h-8 justify-center items-center gap-2.5 relative px-0 py-1">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
            >
              <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <span className="self-stretch text-center text-xs font-medium leading-4 tracking-[0.5px] relative">
          Home
        </span>
      </button>
      
      <div className="w-[62px] h-[62px] relative flex justify-center items-center">
        <button 
          className="w-full h-full rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition-colors flex items-center justify-center"
          aria-label="Camera"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 1L15 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4H9L12 1Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </button>
      </div>
      
      <button
        className={`flex flex-col items-center gap-1 flex-[1_0_0] self-stretch relative px-0 py-1.5 transition-colors ${
          activeTab === 'about' ? 'text-[#6750A4]' : 'text-[#49454F]'
        }`}
        onClick={() => setActiveTab('about')}
        aria-label="About Us"
      >
        <div className="flex justify-center items-center relative rounded-2xl">
          <div className="flex w-14 h-8 justify-center items-center gap-2.5 relative px-0 py-1">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
            >
              <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <span className="self-stretch text-center text-xs font-medium leading-4 tracking-[0.5px] relative">
          About Us
        </span>
      </button>
    </nav>
  );
};
