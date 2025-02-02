import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function EducationForm() {

    const { resumeData, updateResumeData } = useContext(DataContext); 
    
        
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            const tempData = { ...resumeData.education[0], [name]: value };
            const updatedData = [tempData]; // Keep it an array
            updateResumeData('education', updatedData);
        };
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Education</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="schoolName" className="form-label d-block text-start ms-1">School/University Name</label>
                    <input type="text" className="form-control" id="schoolName" placeholder="Enter school or university name" onChange={handleChange} name="institution" value={resumeData.education[0]?.institution} />
                </div>
                <div className="mb-3">
                    <label htmlFor="degree" className="form-label d-block text-start ms-1">Degree</label>
                    <input type="text" className="form-control" id="degree" placeholder="Enter your degree" onChange={handleChange} name="degree" value={resumeData.education[0]?.degree}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="percentage" className="form-label d-block text-start ms-1">Percentage</label>
                    <input type="text" className="form-control" id="percentage" placeholder="Enter your percentage" onChange={handleChange} name="percentage" value={resumeData.education[0]?.percentage}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startYear" className="form-label d-block text-start ms-1">Start Year</label>
                    <input type="text" className="form-control" id="startYear" placeholder="Enter start year" onChange={handleChange} name="startDate" value={resumeData.education[0]?.startDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="endYear" className="form-label d-block text-start ms-1">End Year</label>
                    <input type="text" className="form-control" id="endYear" placeholder="Enter end year" onChange={handleChange} name="endDate" value={resumeData.education[0]?.endDate}/>
                </div>
            </form>
        </div>
    );
}