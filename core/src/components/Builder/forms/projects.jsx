import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function ProjectsForm() {
    const { resumeData, updateResumeData } = useContext(DataContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...resumeData.projects];
        updatedData[index] = { ...updatedData[index], [name]: value };
        updateResumeData("projects", updatedData);
    };

    const handleAddProject = () => {
        const updatedData = [...resumeData.projects, {
            title: "",
            description: "",
            technologies: "",
            link: ""
        }];
        updateResumeData("projects", updatedData);
        setActiveIndex(updatedData.length - 1);
    };

    const handleRemoveProject = (index) => {
        const updatedData = [...resumeData.projects];
        updatedData.splice(index, 1);

        if (updatedData.length === 0) {
            updateResumeData("projects", [{
                title: "",
                description: "",
                technologies: "",
                link: ""
            }]); // Ensure at least one field remains
            setActiveIndex(0);
        } else {
            updateResumeData("projects", updatedData);
            setActiveIndex(Math.max(0, index - 1)); // Move to previous tab if possible
        }
    };

    return (
        <div className="container mt-4">
            {/* Add Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Projects</h2>
                <button className="btn btn-success" onClick={handleAddProject}>
                    + Add
                </button>
            </div>

            {/* Tabs for Projects */}
            <ul className="nav nav-pills mb-3">
                {resumeData.projects.map((_, index) => (
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link d-flex align-items-center ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                            style={{ position: "relative", paddingRight: "30px" }}
                        >
                            Project {index + 1}
                            <span
                                className="ms-2 text-white"
                                style={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                   
                                    padding: "2px 6px",
                                   
                                    background:"transparent",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents switching tabs when clicking ❌
                                    handleRemoveProject(index);
                                }}
                            >
                                <i class="bi bi-x-square text-danger ms-3"></i>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Project Input Fields */}
            <form>
                <div className="mb-3">
                    <label htmlFor="projectName" className="form-label d-block text-start ms-1">Project Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="projectName"
                        placeholder="Enter project name"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="title"
                        value={resumeData.projects[activeIndex]?.title || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label d-block text-start ms-1">Project Description</label>
                    <textarea
                        className="form-control"
                        id="projectDescription"
                        rows="4"
                        placeholder="Provide a brief description of the project"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="description"
                        value={resumeData.projects[activeIndex]?.description || ""}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="techStack" className="form-label d-block text-start ms-1">Technology Stack</label>
                    <input
                        type="text"
                        className="form-control"
                        id="techStack"
                        placeholder="e.g., React, Node.js, MongoDB"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="technologies"
                        value={resumeData.projects[activeIndex]?.technologies || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectLink" className="form-label d-block text-start ms-1">Project Link</label>
                    <input
                        type="url"
                        className="form-control"
                        id="projectLink"
                        placeholder="Provide a link to the project (if applicable)"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="link"
                        value={resumeData.projects[activeIndex]?.link || ""}
                    />
                </div>
            </form>
        </div>
    );
}
