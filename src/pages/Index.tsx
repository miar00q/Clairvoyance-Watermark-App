import React from 'react';
import { AppBar } from '@/components/AppBar';
import { SortingControls } from '@/components/SortingControls';
import { PhotoGrid } from '@/components/PhotoGrid';
import { BottomNavigation } from '@/components/BottomNavigation';

const Index = () => {
  return (
    <div className="inline-flex flex-col items-start w-[412px] h-[896px] max-w-[100vw] max-h-screen overflow-hidden bg-[#FEF7FF] rounded-[28px] border-8 border-solid border-[#CAC4D0] max-md:w-screen max-md:h-screen max-md:border-[none] max-sm:w-screen max-sm:h-screen max-sm:border-[none]">
      <AppBar />
      <SortingControls />
      <PhotoGrid />
      <BottomNavigation />
    </div>
  );
};

export default Index;
