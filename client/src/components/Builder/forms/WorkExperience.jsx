import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function WorkExperienceForm() {
  const { resumeData, updateResumeData } = useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...resumeData.workExperience];
    updatedData[index] = { ...updatedData[index], [name]: value };
    updateResumeData("workExperience", updatedData);
  };

  const handleAddWorkExperience = () => {
    const updatedData = [
      ...resumeData.workExperience,
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ];
    updateResumeData("workExperience", updatedData);
    setActiveIndex(updatedData.length - 1);
  };

  const handleRemoveWorkExperience = (index) => {
    const confirmDelete = window.confirm(
      `You are about to delete Job ${index + 1}. Are you sure?`
    );

    if (confirmDelete) {
      const updatedData = [...resumeData.workExperience];
      updatedData.splice(index, 1);

      if (updatedData.length === 0) {
        updateResumeData("workExperience", [
          {
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ]); // Ensure at least one field remains
        setActiveIndex(0);
      } else {
        updateResumeData("workExperience", updatedData);
        setActiveIndex(Math.max(0, index - 1)); // Move to previous tab if possible
      }
    }
  };

  return (
    <div className="container mt-4">
      {/* Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Work Experience</h2>
        <button className="btn btn-success" onClick={handleAddWorkExperience}>
          + Add
        </button>
      </div>

      {/* Tabs for Work Experience */}
      <ul className="nav nav-pills mb-3">
        {resumeData.workExperience.map((_, index) => (
          <li className="nav-item" key={index}>
            <button
              className={` d-flex align-items-center my-btn-outline ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              style={{ position: "relative", paddingRight: "40px",marginRight:"10px" }}
            >
              Job {index + 1}
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
                  handleRemoveWorkExperience(index);
                }}
              >
                <i className="bi bi-x-square ms-3 text-danger"></i>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Work Experience Input Fields */}
      <form>
        <div className="mb-3">
          <label
            htmlFor="companyName"
            className="form-label d-block text-start ms-1"
          >
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Enter company name"
            onChange={(e) => handleChange(e, activeIndex)}
            name="company"
            value={resumeData.workExperience[activeIndex]?.company || ""}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="jobTitle"
            className="form-label d-block text-start ms-1"
          >
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Enter your job title"
            onChange={(e) => handleChange(e, activeIndex)}
            name="role"
            value={resumeData.workExperience[activeIndex]?.role || ""}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="startDate"
            className="form-label d-block text-start ms-1"
          >
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            onChange={(e) => handleChange(e, activeIndex)}
            name="startDate"
            value={resumeData.workExperience[activeIndex]?.startDate || ""}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="endDate"
            className="form-label d-block text-start ms-1"
          >
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            onChange={(e) => handleChange(e, activeIndex)}
            name="endDate"
            value={resumeData.workExperience[activeIndex]?.endDate || ""}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="jobDescription"
            className="form-label d-block text-start ms-1"
          >
            Job Description
          </label>
          <textarea
            className="form-control"
            id="jobDescription"
            rows="4"
            placeholder="Describe your role and responsibilities"
            onChange={(e) => handleChange(e, activeIndex)}
            name="description"
            value={resumeData.workExperience[activeIndex]?.description || ""}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
