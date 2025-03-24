import { createContext, useState } from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    basicInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
    },
    workExperience: [
      {
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    education: [
      {
        institution: '',
        percentage: '',
        degree: '',
        startDate: '',
        endDate: '',
        grade: '',
      },
    ],
    skills: [],
    projects: [
      {
        title: '',
        description: '',
        technologies: [],
        link: '',
      },
    ],
    achievements: [
      {
        title: '',
        description: '',
      },
    ],
    summary: '',
    others: '',
    resumeName: '',
  });

  function updateResumeData(section, data) {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: data,
    }));
  }

  return (
    <DataContext.Provider value={{ resumeData, setResumeData, updateResumeData }}>
      {children}
    </DataContext.Provider>
  );
}