import { useState, useEffect } from 'react';
import axios from 'axios';

type CVFormProps = {
  onClose: () => void;
};

type CVData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    responsibilities: string;
  }>;
  skills: string[];
};

const CVForm = ({ onClose }: CVFormProps) => {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    education: [],
    experience: [],
    skills: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const { data } = await axios.get('/api/cv');
        setCvData(data);
      } catch (error) {
        console.error('Failed to fetch CV data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCVData();
  }, []);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await axios.post('/api/cv', cvData);
      onClose();
    } catch (error) {
      console.error('Failed to save CV:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div>Loading CV form...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Create Your Professional CV</h2>
        
        {/* Personal Info Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder='hell no'
                value={cvData.personalInfo.name}
                onChange={(e) => setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    name: e.target.value
                  }
                })}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add other personal info fields similarly */}
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-3 border rounded">
              {/* Education fields */}
            </div>
          ))}
          <button 
            onClick={() => setCvData({
              ...cvData,
              education: [...cvData.education, {
                institution: '',
                degree: '',
                year: ''
              }]
            })}
            className="text-blue-600 hover:text-blue-800"
          >
            + Add Education
          </button>
        </section>
        
        {/* Experience Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-4 p-3 border rounded">
              {/* Experience fields */}
            </div>
          ))}
          <button 
            onClick={() => setCvData({
              ...cvData,
              experience: [...cvData.experience, {
                company: '',
                position: '',
                duration: '',
                responsibilities: ''
              }]
            })}
            className="text-blue-600 hover:text-blue-800"
          >
            + Add Experience
          </button>
        </section>
        
        {/* Skills Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.map((skill, index) => (
              <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                {skill}
                <button 
                  onClick={() => setCvData({
                    ...cvData,
                    skills: cvData.skills.filter((_, i) => i !== index)
                  })}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="Add skill"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                  setCvData({
                    ...cvData,
                    skills: [...cvData.skills, e.currentTarget.value.trim()]
                  });
                  e.currentTarget.value = '';
                }
              }}
              className="p-2 border rounded flex-grow"
            />
          </div>
        </section>
        
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save CV'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
