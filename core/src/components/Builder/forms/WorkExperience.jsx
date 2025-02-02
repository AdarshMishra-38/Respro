// WorkExperienceForm.jsx
import { useContext } from "react";
import  { DataContext } from "../context/dataContext";

export default function WorkExperienceForm() {
    const { resumeData, updateResumeData } = useContext(DataContext);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        const tempData = { ...resumeData.workExperience[0], [name]: value };
        const updatedData = [tempData]; // Keep it an array
        updateResumeData('workExperience', updatedData);
    };
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Work Experience</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label d-block text-start ms-1">Company Name</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter company name" onChange={handleChange} name="company" value={resumeData.workExperience[0]?.company || ''} />
                </div>
                <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label d-block text-start ms-1">Job Title</label>
                    <input type="text" className="form-control" id="jobTitle" placeholder="Enter your job title" onChange={handleChange} name="role" value={resumeData.workExperience[0]?.role || ''}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label d-block text-start ms-1" >Start Date</label>
                    <input type="date" className="form-control" id="startDate" onChange={handleChange} name="startDate" value={resumeData.workExperience[0]?.startDate || ''}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label d-block text-start ms-1">End Date</label>
                    <input type="date" className="form-control" id="endDate" onChange={handleChange} name="endDate" value={resumeData.workExperience[0]?.endDate || ''}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="jobDescription" className="form-label d-block text-start ms-1">Job Description</label>
                    <textarea className="form-control" id="jobDescription" rows="4" placeholder="Describe your role and responsibilities" onChange={handleChange} name="description" value={resumeData.workExperience[0]?.description || ''}></textarea>
                </div>
            </form>
        </div>
    );
}