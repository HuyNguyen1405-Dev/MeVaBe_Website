'use client';

import React from 'react';

interface LoadingBarProps {
  isVisible: boolean;
  progress: number;
}

export default function LoadingBar({ isVisible, progress }: LoadingBarProps) {
  if (!isVisible) return null;

  return (
    <>
      {/* Top loading bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Loading overlay for smoother transition */}
      <div className="fixed inset-0 bg-white/20 backdrop-blur-sm z-[9998] transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-600 font-medium">Đang tải...</span>
          </div>
        </div>
      </div>
    </>
  );
}