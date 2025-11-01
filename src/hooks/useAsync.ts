import { useState, useCallback } from "react";
import { useAppDispatch } from "./redux";
import { addNotification } from "@/store/slices/uiSlice";

interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

interface UseAsyncOptions {
  showSuccessNotification?: boolean;
  showErrorNotification?: boolean;
  successMessage?: string;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOptions = {}
) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await asyncFunction();
      setState((prev) => ({ ...prev, data: result, isLoading: false }));

      if (options.showSuccessNotification && options.successMessage) {
        dispatch(
          addNotification({
            type: "success",
            message: options.successMessage,
          })
        );
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Đã xảy ra lỗi";
      setState((prev) => ({ ...prev, error: errorMessage, isLoading: false }));

      if (options.showErrorNotification !== false) {
        dispatch(
          addNotification({
            type: "error",
            message: errorMessage,
          })
        );
      }

      throw error;
    }
  }, [asyncFunction, dispatch, options]);

  return {
    ...state,
    execute,
  };
}
