import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { loadUser } from '@/store/slices/authSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, token, isLoading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    
    if (storedToken && !user) {
      dispatch(loadUser());
    }
  }, [dispatch, user]);

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
  };
}