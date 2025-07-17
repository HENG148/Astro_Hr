import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setIsLoading(false)
    }
    checkAuth();
  }, []);

  return { isAuthenticated, isLoading };
}