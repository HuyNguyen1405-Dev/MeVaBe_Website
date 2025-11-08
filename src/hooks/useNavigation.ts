'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationState {
  isLoading: boolean;
  progress: number;
}

export function useNavigation() {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    isLoading: false,
    progress: 0,
  });
  
  const router = useRouter();
  const pathname = usePathname();

  // Smooth navigation with loading state
  const navigateTo = (url: string) => {
    setNavigationState({ isLoading: true, progress: 0 });
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setNavigationState(prev => ({
        ...prev,
        progress: Math.min(prev.progress + 10, 90)
      }));
    }, 50);

    // Navigate after small delay for smooth UX
    setTimeout(() => {
      router.push(url);
      clearInterval(progressInterval);
      
      // Complete progress after navigation
      setTimeout(() => {
        setNavigationState({ isLoading: false, progress: 100 });
      }, 200);
    }, 150);
  };

  // Reset loading state on pathname change
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavigationState({ isLoading: false, progress: 0 });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return {
    ...navigationState,
    navigateTo,
  };
}