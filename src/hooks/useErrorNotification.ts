import { useEffect } from "react";
import toast from "react-hot-toast";

export function useErrorNotification(isError: boolean, error: Error | null, title: string) {
  useEffect(() => {
    if (isError && error) {
      toast.error(`${title}: ${error.message}`);
    }
  }, [isError, error, title]);
}