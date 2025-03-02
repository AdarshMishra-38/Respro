import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function EducationForm() {
    const { resumeData, updateResumeData } = useContext(DataContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...resumeData.education];
        updatedData[index] = { ...updatedData[index], [name]: value };
        updateResumeData("education", updatedData);
    };

    const handleAddEducation = () => {
        const updatedData = [...resumeData.education, {
            institution: "",
            degree: "",
            percentage: "",
            startDate: "",
            endDate: ""
        }];
        updateResumeData("education", updatedData);
        setActiveIndex(updatedData.length - 1);
    };

    const handleRemoveEducation = (index) => {
        const confirmDelete = window.confirm(
            `You are about to delete Education ${index + 1}. Are you sure?`
        );

        if (confirmDelete) {
            const updatedData = [...resumeData.education];
            updatedData.splice(index, 1);

            if (updatedData.length === 0) {
                updateResumeData("education", [{
                    institution: "",
                    degree: "",
                    percentage: "",
                    startDate: "",
                    endDate: ""
                }]); // Ensure at least one field remains
                setActiveIndex(0);
            } else {
                updateResumeData("education", updatedData);
                setActiveIndex(Math.max(0, index - 1)); // Move to previous tab if possible
            }
        }
    };

    return (
        <div className="container mt-4">
            {/* Add Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Education</h2>
                <button className="btn btn-success" onClick={handleAddEducation}>
                    + Add
                </button>
            </div>

            {/* Tabs for Education */}
            <ul className="nav nav-pills mb-3">
                {resumeData.education.map((_, index) => (
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link d-flex align-items-center ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                            style={{ position: "relative", paddingRight: "30px" }}
                        >
                            Education {index + 1}
                            <span
                                className="ms-2 text-white"
                                style={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    color: "#fff",
                                    padding: "2px 6px",
                                    background: "transparent",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents switching tabs when clicking ❌
                                    handleRemoveEducation(index);
                                }}
                            >
                                <i className="bi bi-x-square ms-2 text-danger"></i>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Education Input Fields */}
            <form>
                <div className="mb-3">
                    <label htmlFor="schoolName" className="form-label d-block text-start ms-1">School/University Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="schoolName"
                        placeholder="Enter school or university name"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="institution"
                        value={resumeData.education[activeIndex]?.institution || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="degree" className="form-label d-block text-start ms-1">Degree</label>
                    <input
                        type="text"
                        className="form-control"
                        id="degree"
                        placeholder="Enter your degree"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="degree"
                        value={resumeData.education[activeIndex]?.degree || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="percentage" className="form-label d-block text-start ms-1">Percentage</label>
                    <input
                        type="text"
                        className="form-control"
                        id="percentage"
                        placeholder="Enter your percentage"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="percentage"
                        value={resumeData.education[activeIndex]?.percentage || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="startYear" className="form-label d-block text-start ms-1">Start Year</label>
                    <input
                        type="text"
                        className="form-control"
                        id="startYear"
                        placeholder="Enter start year"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="startDate"
                        value={resumeData.education[activeIndex]?.startDate || ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="endYear" className="form-label d-block text-start ms-1">End Year</label>
                    <input
                        type="text"
                        className="form-control"
                        id="endYear"
                        placeholder="Enter end year"
                        onChange={(e) => handleChange(e, activeIndex)}
                        name="endDate"
                        value={resumeData.education[activeIndex]?.endDate || ""}
                    />
                </div>
            </form>
        </div>
    );
}
