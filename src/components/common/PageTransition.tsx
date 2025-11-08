'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    // Bắt đầu transition khi route thay đổi
    setIsLoading(true);
    setTransitionClass('page-transition-exit-active');
    
    // Delay để hiệu ứng exit hoàn thành
    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionClass('page-transition-enter');
      
      // Trigger enter animation
      const enterTimer = setTimeout(() => {
        setTransitionClass('page-transition-enter-active');
        setIsLoading(false);
      }, 50);

      return () => clearTimeout(enterTimer);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [pathname, children]);

  return (
    <>
      {/* Loading bar */}
      {isLoading && <div className="page-loading" />}
      
      {/* Page content với transition classes */}
      <div className={`transition-container ${transitionClass}`}>
        {displayChildren}
      </div>
    </>
  );
}