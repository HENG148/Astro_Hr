import fetchAPI from '../api';

// Define interface for CV data
interface CVData {
  // Define the structure of your CV data here
  // Example properties:
  id?: string;
  personalInfo: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    startDate: string;
    endDate?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
  }>;
  skills: string[];
  // Add other sections as needed
}

export const createCV = async (cvData: CVData, token: string): Promise<CVData> => {
  return await fetchAPI<CVData>('/cv', 'POST', cvData, token);
};

export const getCV = async (token: string): Promise<CVData> => {
  return await fetchAPI<CVData>('/cv', 'GET', null, token);
};

export const updateCV = async (cvData: CVData, token: string): Promise<CVData> => {
  return await fetchAPI<CVData>('/cv', 'PUT', cvData, token);
};
