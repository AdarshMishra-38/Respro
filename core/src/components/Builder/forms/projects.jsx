import { useContext } from "react";
import { DataContext } from "../context/dataContext";


export default function ProjectsForm() {
    const { resumeData, updateResumeData } = useContext(DataContext); 
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        const tempData = { ...resumeData.projects[0], [name]: value };
        const updatedData = [tempData]; // Keep it an array
        updateResumeData('projects', updatedData);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Projects</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="projectName" className="form-label d-block text-start ms-1">Project Name</label>
                    <input type="text" className="form-control" id="projectName" placeholder="Enter project name" onChange={handleChange} name="title" value={resumeData.projects[0]?.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label d-block text-start ms-1">Project Description</label>
                    <textarea className="form-control" id="projectDescription" rows="4" placeholder="Provide a brief description of the project" onChange={handleChange} name="description" value={resumeData.projects[0]?.description}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="techStack" className="form-label d-block text-start ms-1">Technology Stack</label>
                    <input type="text" className="form-control" id="techStack" placeholder="e.g., React, Node.js, MongoDB" onChange={handleChange} name="technologies" value={resumeData.projects[0]?.technologies}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="projectLink" className="form-label d-block text-start ms-1">Project Link</label>
                    <input type="url" className="form-control" id="projectLink" placeholder="Provide a link to the project (if applicable)" onChange={handleChange} name="link" value={resumeData.projects[0]?.link}/>
                </div>
            </form>
        </div>
    );
}