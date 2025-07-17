import fetchAPI from "../api";

interface UserData {
  username: string;
  email: string;
  password: string;
  // Add any other user properties here
}

interface Credentials {
  email: string;
  password: string;
}

interface ApiResponse {
  // Define the structure of your API response here
  // For example:
  success: boolean;
  data?: any;
  error?: string;
  token: string;
}

export const register = async (userData: UserData): Promise<ApiResponse> => {
  return await fetchAPI('/auth/register', 'POST', userData);
};

export const login = async (credentials: Credentials): Promise<ApiResponse> => {
  return await fetchAPI('/auth/login', 'POST', credentials);
};

export const getCurrentUser = async (token: string): Promise<ApiResponse> => {
  return await fetchAPI('/auth/me', 'GET', null, token);
};